import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TerminalService} from '@shared/terminal.service';
import {take, takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-user-input',
    templateUrl: './user-input.component.html',
    styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
    @ViewChild('inputElement') inputEl: ElementRef<HTMLInputElement>;
    currentInput = '';
    newInput = '';
    inputFinished = false;
    inputActive = false;
    private timeouts: number[] = [];
    private inputActiveTimeout: any;

    constructor(private terminalService: TerminalService) {
        this.terminalService.input$
            .pipe(takeUntil(this.terminalService.commands$))
            .pipe(take(1))
            .subscribe((command: string) => {
                if (this.inputEl) {
                    this.inputEl.nativeElement.disabled = true;
                }

                let finishCommandPromise = Promise.resolve();
                if (!this.inputFinished) {
                    this.currentInput = ''; // TODO instead of removing current input, act as if Ctrl+C was pressed
                    finishCommandPromise = new Promise<void>(handle => this.animateInput(command, handle));
                }

                finishCommandPromise.then(() => {
                    this.inputFinished = true;
                    this.terminalService.commands$.next(this.currentInput);
                    this.clearTimeouts();
                });
            });
    }

    // tslint:disable-next-line:variable-name
    private _historyIndex = -1;

    get historyIndex(): number {
        return this._historyIndex;
    }

    set historyIndex(newValue: number) {
        const oldValue = this._historyIndex;
        const history = this.terminalService.inputHistory;

        if (newValue < -1 || newValue >= history.length) {
            return;
        }

        if (oldValue === -1) {
            this.newInput = this.currentInput; // store currentinput locally
        } else {
            history.splice(oldValue, 1, this.currentInput); // Replace history entry with currentInput
        }
        this.currentInput = newValue === -1 ? this.newInput : history[newValue];
        this._historyIndex = newValue;
    }

    hasFocus = () => this.terminalService.hasFocus$;

    ngOnInit(): void {
        setTimeout(() => {
            this.terminalService.refocus$
                .pipe(takeUntil(this.terminalService.commands$))
                .subscribe(() => this.inputEl?.nativeElement.focus());
        });
    }

    onFocusChange(value: boolean): void {
        this.terminalService.hasFocus$.next(value);
    }

    submitCommand(): void {
        // Pre-set this value to prevent animation
        this.inputFinished = true;
        this.terminalService.input$.next(this.currentInput);
    }

    cancelCommand(): void {
        this.inputFinished = true;
        this.currentInput += '^C';
        this.clearTimeouts();
        this.terminalService.commands$.next(null);
    }

    animateInput(input: string, callback: () => void): void {
        if (input.length <= 0) {
            return callback();
        }

        this.currentInput += input.slice(0, 1);
        this.setTimeout(() => this.animateInput(input.slice(1), callback), 120);
    }

    onKeyDown(event: KeyboardEvent): void {
        let preventDefault = true;
        switch (event.key) {
            case 'Enter':
                return this.submitCommand();
            case 'ArrowUp':
            case 'Up':
                this.historyIndex++;
                break;
            case 'ArrowDown':
            case 'Down':
                this.historyIndex--;
                break;
            case 'c':
                if (event.ctrlKey) {
                    return this.cancelCommand();
                }
                preventDefault = false;
                break;
            default:
                preventDefault = false;
        }
        if (preventDefault) {
            event.preventDefault();
        }

        const el = this.inputEl.nativeElement;
        this.setTimeout(() => {
            // Set timeout so we can deal with the new value after a keypress
            if (el.selectionStart !== el.selectionEnd) { // prevent selection
                el.setSelectionRange(el.selectionStart, el.selectionStart);
            }
        });

        clearTimeout(this.inputActiveTimeout);
        this.inputActive = true;
        this.inputActiveTimeout = setTimeout(() => {
            this.inputActive = false;
        }, 200);
    }

    private setTimeout(handler: TimerHandler, timeout?: number): number {
        return this.timeouts.push(setTimeout(handler, timeout));
    }

    private clearTimeouts(): void {
        clearTimeout(this.inputActiveTimeout);
        this.timeouts.forEach((t) => clearTimeout(t));
    }
}
