import {Directive, HostBinding, HostListener, Input} from '@angular/core';
import {TerminalService} from '@shared/terminal.service';

@Directive({
    exportAs: 'appCommandLink',
    selector: 'a[appCommandLink], b[appCommandLink]'
})
export class CommandLinkDirective {
    // tslint:disable-next-line:no-input-rename
    @Input('appCommandLink')
    command: string;

    @HostBinding('href')
    href = '#';

    constructor(private terminalService: TerminalService) {
    }

    @HostListener('click')
    onClick(): void {
        this.terminalService.input$.next(this.command);
    }

}
