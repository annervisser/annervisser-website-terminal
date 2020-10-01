import {Component, OnInit} from '@angular/core';
import {CommandOutput} from '../command-output';

@Component({
    selector: 'app-contact-command',
    template: `You can contact me via:<br>
    <a href="mailto:mail@annervisser.nl" target="_blank">mail@annervisser.nl</a><br>
    or<br>
    <a href="https://www.linkedin.com/in/annervisser" rel="noopener" target="_blank">LinkedIn</a>
    <br>`,
    styles: []
})
export class ContactCommandComponent implements OnInit, CommandOutput {
    data: any;

    constructor() {
    }

    ngOnInit(): void {
    }

}
