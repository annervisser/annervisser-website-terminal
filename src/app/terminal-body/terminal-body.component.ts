import {Component, OnInit, ViewChild} from '@angular/core';
import {CommandHostDirective} from '@shared/command-host.directive';
import {CommandService} from '@shared/command.service';

@Component({
    selector: 'app-terminal-body',
    template: '<ng-template appCommandHost></ng-template>',
    styles: [`
        :host {
            display: block;
            color: white;
            font-family: 'Ubuntu Mono', monospace;
            font-size: 13pt;
            letter-spacing: 0.34px;
            padding: 2px 4px;
        }` // TODO get font from google fonts
    ]
})
export class TerminalBodyComponent implements OnInit {

    @ViewChild(CommandHostDirective, {static: true})
    set commandHost(commandHost: CommandHostDirective) {
        this.commandService.setCommandHost(commandHost);
    }

    constructor(private commandService: CommandService) {
    }

    ngOnInit(): void {
    }

}
