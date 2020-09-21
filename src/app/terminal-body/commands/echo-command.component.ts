import {Component, Input, OnInit} from '@angular/core';
import {CommandOutput} from "../command-output";

@Component({
    selector: 'app-echo-command',
    template: `{{data}}<br>`,
    styles: []
})
export class EchoCommandComponent implements OnInit, CommandOutput {
    @Input()
    data: any;

    constructor() {
    }

    ngOnInit(): void {
    }

}
