import {Component} from '@angular/core';
import {TerminalService} from '@shared/terminal.service';
import {CommandOutput} from '@shared/command-output';

@Component({
    selector: 'app-man-command',
    template: `Commando's:<br>
    - <a appCommandLink="contact">contact</a>
    <!--TODO finish man command-->
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
