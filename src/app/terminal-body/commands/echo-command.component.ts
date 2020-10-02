import {Component} from '@angular/core';
import {CommandOutput} from '@shared/command.service';

@Component({
    selector: 'app-echo-command',
    template: `{{data}}<br>`,
    styles: []
})
export class EchoCommandComponent implements CommandOutput {
    data: any;
}
