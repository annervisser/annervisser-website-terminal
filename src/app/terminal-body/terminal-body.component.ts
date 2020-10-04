import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CommandHostDirective} from '@shared/command-host.directive';
import {CommandService} from '@shared/command.service';

@Component({
    selector: 'app-terminal-body',
    template: '<ng-template appCommandHost></ng-template><div style="height: 1px;"></div>',
    styleUrls: ['./terminal-body.component.scss']
})
export class TerminalBodyComponent implements OnInit {
    @ViewChild(CommandHostDirective, {static: true})
    set commandHost(commandHost: CommandHostDirective) {
        this.commandService.setCommandHost(commandHost);
    }

    constructor(private commandService: CommandService,
                private elementRef: ElementRef) {
    }

    ngOnInit(): void {
        this.commandService.componentLoaded$.subscribe(() => {
            const el = this.elementRef.nativeElement;
            el.scrollTop = el.scrollHeight;
        });
    }

}
