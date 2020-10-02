import {Component} from '@angular/core';
import {TerminalService} from '@shared/terminal.service';
import {CommandOutput} from '@shared/command-output';

@Component({
    selector: 'app-man-command',
    template: `HALP<br>
    <a (click)="enterCommand('echo hello')">echo</a>
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
