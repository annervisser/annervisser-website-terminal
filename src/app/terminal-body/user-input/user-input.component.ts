import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TerminalService} from "../../shared/terminal.service";

@Component({
    selector: 'app-user-input',
    templateUrl: './user-input.component.html',
    styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit {
    @ViewChild('inputElement') inputEl: ElementRef<HTMLInputElement>;

    constructor(private terminalService: TerminalService) {
        terminalService.refocus$.subscribe(() => this.inputEl.nativeElement.focus())
    }

    currentInput: string;

    ngOnInit(): void {
        // setTimeout(() => this.inputEl.nativeElement.focus(), 1000)
    }

    onFocusChange(value: boolean) {
        this.terminalService.hasFocus$.next(value);
    }

    submitCommand() {
        // todo
    }

    updateCaretPosition() {
        // Set timeout so we can deal with the new value after a keypress
        setTimeout(() => {
            let el = this.inputEl.nativeElement;
            if (el.selectionStart !== el.selectionEnd) { // prevent selection
                el.setSelectionRange(el.selectionStart, el.selectionStart, "none");
            }
        })
    }

    hasFocus() {
        return this.terminalService.hasFocus$;
    }
}
