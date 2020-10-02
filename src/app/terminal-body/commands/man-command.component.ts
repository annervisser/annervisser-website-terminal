import {Component} from '@angular/core';
import {TerminalService} from '@shared/terminal.service';
import {CommandOutput} from '@shared/command.service';

@Component({
    selector: 'app-man-command',
    template: `HALP<br>
    <a (click)="enterCommand('echo hello')">echo</a>
    <br>`,
    styles: []
})
export class ManCommandComponent implements CommandOutput {
    data: any;

    constructor(private terminalService: TerminalService) {
    }

    enterCommand(command: string): void {
        this.terminalService.input$.next(command);
    }
}
