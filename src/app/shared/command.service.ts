import {ComponentFactoryResolver, ComponentRef, Injectable, Type} from '@angular/core';
import {CommandHostDirective} from './command-host.directive';
import {EchoCommandComponent} from '../terminal-body/commands/echo-command.component';
import {UserInputComponent} from '../terminal-body/user-input/user-input.component';
import {TerminalService} from './terminal.service';
import {ContactCommandComponent} from '../terminal-body/commands/contact-command.component';
import {ManCommandComponent} from '../terminal-body/commands/man-command.component';

export interface CommandOutput {
    data: any;
}

export interface Command {
    aliases: string[];
    component?: Type<CommandOutput>;
    clear?: boolean;
}

export const commands: Command[] = [
    {
        aliases: ['echo', 'print'],
        component: EchoCommandComponent
    },
    {
        aliases: ['contact', 'email', 'linkedin'],
        component: ContactCommandComponent
    },
    {
        aliases: ['man', 'help', 'info', '?', 'commands'],
        component: ManCommandComponent
    },
    {
        aliases: ['clear', 'reset'],
        clear: true
    }
];


@Injectable({
    providedIn: 'root'
})
export class CommandService {
    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private terminalService: TerminalService) {
    }

    // tslint:disable-next-line:variable-name
    private commandHost: CommandHostDirective;

    setCommandHost(value: CommandHostDirective): void {
        this.commandHost = value;

        this.loadCommandComponent(EchoCommandComponent,
            `Welcome to AnnerSH 00.01\nLocal time is ${(new Date()).toISOString()}\nType 'help' to see available commands`);
        this.loadInputComponent();

        this.terminalService.commands$.subscribe((input) => {
            const commandParts: string[] = input.split(' ');
            const args = commandParts.slice(1);

            const command = commands.find((c) => c.aliases.includes(commandParts[0]));
            if (!command) {
                // TODO unknown command
                this.loadCommandComponent(EchoCommandComponent, 'Unknown command');
            } else {
                this.executeCommand(command, args);
            }

            this.loadInputComponent();
        });
    }

    private executeCommand(command: Command, args: string[]): void {
        if (command.clear) {
            this.clearTerminal();
        }
        if (command.component) {
            this.loadCommandComponent(command.component, args);
        }
    }

    loadComponent<T>(component: Type<T>): ComponentRef<T> {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        return this.commandHost.viewContainerRef.createComponent<T>(componentFactory);
    }

    clearTerminal(): void {
        this.commandHost.viewContainerRef.clear();
    }

    loadCommandComponent(component: Type<CommandOutput>, data = null): void {
        const componentRef = this.loadComponent(component);
        componentRef.instance.data = data;
    }

    loadInputComponent(): void {
        this.loadComponent(UserInputComponent);
        this.terminalService.refocus$.next();
    }
}
