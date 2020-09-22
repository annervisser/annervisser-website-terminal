import {ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TerminalService} from '../../shared/terminal.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-user-input',
    templateUrl: './user-input.component.html',
    styleUrls: ['./user-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInputComponent implements OnInit, OnDestroy {
    @ViewChild('inputElement') inputEl: ElementRef<HTMLInputElement>;
    inputFinished = false;
    currentInput = '';

    timeouts: number[] = [];

    constructor(private terminalService: TerminalService) {
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.terminalService.refocus$
                .pipe(takeUntil(this.terminalService.commands$))
                .subscribe(() => this.inputEl.nativeElement.focus());
        });
    }

    ngOnDestroy(): void {
        // We know this component is never destroyed
        // this.refocusSubscription.unsubscribe();
    }

    onFocusChange(value: boolean): void {
        this.terminalService.hasFocus$.next(value);
    }

    submitCommand(): void {
        this.terminalService.commands$.next(this.currentInput);
        this.timeouts.forEach((t) => clearTimeout(t));
        this.inputFinished = true;
    }

    updateCaretPosition(): void {
        this.timeouts.push(
            // Set timeout so we can deal with the new value after a keypress
            setTimeout(() => {
                const el = this.inputEl.nativeElement;
                if (el.selectionStart !== el.selectionEnd) { // prevent selection
                    el.setSelectionRange(el.selectionStart, el.selectionStart);
                }
            })
        );
    }

    get hasFocus(): Subject<boolean> {
        return this.terminalService.hasFocus$;
    }
}
