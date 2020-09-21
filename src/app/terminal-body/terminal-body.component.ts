import {Component, ComponentFactoryResolver, OnInit, Type, ViewChild} from '@angular/core';
import {CommandHostDirective} from "./command-host.directive";
import {NameCommandComponent} from "./commands/name-command/name-command.component";
import {CommandOutput} from "./command-output";
import {EchoCommandComponent} from "./commands/echo-command.component";

@Component({
    selector: 'app-terminal-body',
    templateUrl: './terminal-body.component.html',
    styleUrls: ['./terminal-body.component.scss']
})
export class TerminalBodyComponent implements OnInit {

    @ViewChild(CommandHostDirective, {static: true}) commandHost: CommandHostDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit(): void {
        this.loadComponent(NameCommandComponent, {name: 'test'});
        this.loadComponent(EchoCommandComponent, "echo command output");
    }

    loadComponent(component: Type<CommandOutput>, data) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        const componentRef = this.commandHost.viewContainerRef.createComponent<CommandOutput>(componentFactory);
        componentRef.location.nativeElement.classList.add('commandComponent');
        componentRef.instance.data = data;
    }

}
