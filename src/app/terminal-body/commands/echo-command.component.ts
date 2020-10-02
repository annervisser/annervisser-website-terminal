import {Component} from '@angular/core';
import {CommandOutput} from '@shared/command-output';

@Component({
    selector: 'app-echo-command',
    template: `{{data.join('')}}<br>`,
    styles: []
})
export class EchoCommandComponent extends CommandOutput {
}
