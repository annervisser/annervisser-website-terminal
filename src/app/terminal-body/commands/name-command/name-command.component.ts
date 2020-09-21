import {Component, Input, OnInit} from '@angular/core';
import {CommandOutput} from "../../command-output";

@Component({
    selector: 'app-name-command',
    templateUrl: './name-command.component.html',
    styleUrls: ['./name-command.component.scss']
})
export class NameCommandComponent implements OnInit, CommandOutput {

    @Input()
    data: any;

    constructor() {
    }

    ngOnInit(): void {
    }

}
