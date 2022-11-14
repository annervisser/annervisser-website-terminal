import { Component } from '@angular/core';
import { TerminalService } from '@shared/terminal.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(public terminalService: TerminalService) {
    }

    focusInput(): void {
        this.terminalService.refocus$.next();
    }
}
