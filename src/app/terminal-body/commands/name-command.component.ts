import {Component} from '@angular/core';
import {CommandOutput} from '../../shared/command-output';

@Component({
    selector: 'app-name-command',
    template: `My name is Anner! Your name is {{data.name || 'unknown'}}<br>`,
})
export class NameCommandComponent implements CommandOutput {
    data: any;

}
