import {Component, OnInit} from '@angular/core';
import {TerminalService} from "../../shared/terminal.service";
import {Subject} from "rxjs";

@Component({
    selector: 'app-terminal-cursor',
    templateUrl: './terminal-cursor.component.html',
    styleUrls: ['./terminal-cursor.component.scss']
})
export class TerminalCursorComponent implements OnInit {

    constructor(private terminalService: TerminalService) {
    }

    ngOnInit(): void {
    }

    get hasFocus(): Subject<boolean> {
        return this.terminalService.hasFocus$;
    }
}
