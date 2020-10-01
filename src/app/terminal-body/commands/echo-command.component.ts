import {Component} from '@angular/core';
import {CommandOutput} from '../../shared/command-output';

@Component({
    selector: 'app-echo-command',
    template: `{{data}}<br>`,
    styles: []
})
export class EchoCommandComponent implements CommandOutput {
    data: any;
}
