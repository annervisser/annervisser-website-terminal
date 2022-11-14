import { Component } from '@angular/core';
import { CommandOutput } from '@shared/command-output';

@Component({
    selector: 'app-echo-command',
    template: `
        <span [innerHTML]="input" *ngIf="data?.html else plainOutput"></span>
        <ng-template #plainOutput>{{input.join('')}}</ng-template>
        <br>`,
    styles: []
})
export class EchoCommandComponent extends CommandOutput {
    data: { html: boolean; } = {html: false};
}
