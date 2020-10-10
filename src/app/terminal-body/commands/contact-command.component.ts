import {Component} from '@angular/core';
import {CommandOutput} from '@shared/command-output';

@Component({
    selector: 'app-contact-command',
    template: `Je kunt me bereiken via:<br>
    <a href="mailto:mail@annervisser.nl" target="_blank">mail@annervisser.nl</a><br>
    of<br>
    <a href="https://www.linkedin.com/in/annervisser" rel="noopener" target="_blank">LinkedIn</a>
    <br>`,
    styles: []
})
export class ContactCommandComponent extends CommandOutput {
}
