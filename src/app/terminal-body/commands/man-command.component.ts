import {Component} from '@angular/core';
import {TerminalService} from '@shared/terminal.service';
import {CommandOutput} from '@shared/command-output';

@Component({
    selector: 'app-man-command',
    template: `Commands:<br>
    - <a (click)="enterCommand('contact')">contact</a>
    <br>`,
    styles: []
})
export class ManCommandComponent extends CommandOutput {
    constructor(private terminalService: TerminalService) {
        super();
    }

    enterCommand(command: string): void {
        this.terminalService.input$.next(command);
    }
}
