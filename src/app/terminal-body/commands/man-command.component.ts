import {Component} from '@angular/core';
import {TerminalService} from '@shared/terminal.service';
import {CommandOutput} from '@shared/command-output';

@Component({
    selector: 'app-man-command',
    template: `
        <p>Type een commando of klik op een &lt;link&gt; om een commando uit te voeren.</p>
        Beschikbare commando's:<br>
        <ul>
            <li><a appCommandLink="curriculum-vitae">curriculum-vitae</a></li>
            <li><a appCommandLink="portfolio">portfolio</a></li>
            <li><a appCommandLink="about-me">about-me</a></li>
            <li><a appCommandLink="contact">contact</a></li>
            <li><a appCommandLink="help">help</a></li>
        </ul>
        <br>
    `,
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
