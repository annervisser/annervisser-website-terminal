import { Directive, Input } from '@angular/core';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class CommandOutput {
    @Input()
    input: string[] = [];
    data: any = {};
}
