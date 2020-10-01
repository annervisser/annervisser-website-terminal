import {Component, ComponentFactoryResolver, ComponentRef, OnInit, Type, ViewChild} from '@angular/core';
import {CommandHostDirective} from './command-host.directive';
import {NameCommandComponent} from './commands/name-command/name-command.component';
import {CommandOutput} from './command-output';
import {EchoCommandComponent} from './commands/echo-command.component';
import {TerminalService} from '../shared/terminal.service';
import {UserInputComponent} from './user-input/user-input.component';
import {ContactCommandComponent} from './commands/contact-command.component';
import {ManCommandComponent} from './commands/man-command.component';

@Component({
    selector: 'app-terminal-body',
    templateUrl: './terminal-body.component.html',
    styleUrls: ['./terminal-body.component.scss']
})
export class TerminalBodyComponent implements OnInit {

    @ViewChild(CommandHostDirective, {static: true}) commandHost: CommandHostDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private terminalService: TerminalService) {
    }

    ngOnInit(): void {
        this.loadCommandComponent(EchoCommandComponent,
            `Welcome to AnnerSH 00.01\nLocal time is ${(new Date()).toISOString()}\nType 'help' to see available commands`);
        this.loadInputComponent();

        this.terminalService.commands$.subscribe((command) => {
            const commandParts: string[] = command.split(' ');
            const args = commandParts.slice(1).join(' ');

            switch (commandParts[0]) {
                // TODO make this an object
                case 'echo':
                    this.loadCommandComponent(EchoCommandComponent, args);
                    break;
                case 'name':
                    this.loadCommandComponent(NameCommandComponent, {name: args});
                    break;
                case 'clear':
                    this.clearTerminal();
                    break;
                case 'contact':
                    this.loadCommandComponent(ContactCommandComponent);
                    break;
                case 'man':
                    this.loadCommandComponent(ManCommandComponent, args);
                    break;
                default:
                    // TODO unknown command
                    this.loadCommandComponent(EchoCommandComponent, 'Unknown command');
                    break;
            }
            this.loadInputComponent();
        });
    }

    private loadComponent<T>(component: Type<T>): ComponentRef<T> {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        return this.commandHost.viewContainerRef.createComponent<T>(componentFactory);
    }

    private clearTerminal(): void {
        this.commandHost.viewContainerRef.clear();
    }

    private loadCommandComponent(component: Type<CommandOutput>, data = null): void {
        const componentRef = this.loadComponent(component);
        componentRef.instance.data = data;
    }

    private loadInputComponent(): void {
        this.loadComponent(UserInputComponent);
        this.terminalService.refocus$.next();
    }

}
