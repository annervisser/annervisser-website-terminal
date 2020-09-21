import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appCommandHost]'
})
export class CommandHostDirective {

    constructor(public viewContainerRef: ViewContainerRef) {
    }

}
