import {Component, OnInit} from '@angular/core';
import {CommandOutput} from '../command-output';
import {TerminalService} from '../../shared/terminal.service';

@Component({
    selector: 'app-man-command',
    template: `HALP<br>
    <a (click)="enterCommand('echo hello')">echo</a><br>`,
    styles: []
})
export class ManCommandComponent implements OnInit, CommandOutput {
    data: any;

    constructor(private terminalService: TerminalService) {
    }

    ngOnInit(): void {
    }

    enterCommand(command: string): void {
        this.terminalService.input$.next(command);
    }
}
