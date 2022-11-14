import { ComponentRef, Injectable, Type } from '@angular/core';
import { CommandHostDirective } from './command-host.directive';
import { EchoCommandComponent } from '../terminal-body/commands/echo-command.component';
import { UserInputComponent } from '../terminal-body/user-input/user-input.component';
import { TerminalService } from './terminal.service';
import { ContactCommandComponent } from '../terminal-body/commands/contact-command.component';
import { ManCommandComponent } from '../terminal-body/commands/man-command.component';
import { CommandOutput } from '@shared/command-output';
import { Subject } from 'rxjs';
import { AboutMeCommandComponent } from '../terminal-body/commands/about-me-command.component';
import { CurriculumVitaeCommandComponent } from '../terminal-body/commands/curriculum-vitae-command.component';
import { PortfolioCommandComponent } from '../terminal-body/commands/portfolio-command.component';

interface Command {
    aliases: string[];
    component?: Type<CommandOutput>;
    data?: any;
    clear?: boolean;
}

export const commands: Command[] = [
    {
        aliases: ['echo', 'print'],
        component: EchoCommandComponent,
        data: {html: false}
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
    },
    {
        aliases: ['about-me', 'about'],
        component: AboutMeCommandComponent
    },
    {
        aliases: ['resume', 'curriculum-vitae', 'cv'],
        component: CurriculumVitaeCommandComponent
    },
    {
        aliases: ['portfolio', 'cases', 'projects'],
        component: PortfolioCommandComponent
    }
];


@Injectable({
    providedIn: 'root'
})
export class CommandService {
    componentLoaded$: Subject<void> = new Subject<void>();
    private commandHost: CommandHostDirective;

    constructor(private terminalService: TerminalService) {
    }

    setCommandHost(value: CommandHostDirective): void {
        this.commandHost = value;

        this.loadCommandComponent(EchoCommandComponent,
            `AnnerSH v0.01<br>
            Huidige tijd is ${(new Date()).toISOString()}<br>
            Type 'help' om beschikbare commando's te zien`,
            {html: true});
        this.loadInputComponent();
        setTimeout(() => this.terminalService.input$.next('help'), 200);

        this.terminalService.commands$.subscribe((input: string) => {
            input = input ? input.trim() : '';
            if (input) {
                this.parseInput(input);
            }

            this.loadInputComponent();
        });
    }

    loadComponent<T>(component: Type<T>): ComponentRef<T> {
        const componentRef = this.commandHost.viewContainerRef.createComponent(component);
        this.componentLoaded$.next();
        return componentRef;
    }

    clearTerminal(): void {
        this.commandHost.viewContainerRef.clear();
    }

    loadCommandComponent<T extends CommandOutput>(component: Type<T>,
                                                  input?: string | string[],
                                                  data?: any): void {
        const componentRef = this.loadComponent(component);
        componentRef.instance.input = Array.isArray(input) ? input : [input];
        componentRef.instance.data = data;
    }

    loadInputComponent(): void {
        this.loadComponent(UserInputComponent);
        this.terminalService.refocus$.next();
    }

    private parseInput(input: string): void {
        const commandParts: string[] = input.split(' ');
        const args = commandParts.slice(1);

        const command = commands.find((c) => c.aliases.includes(commandParts[0]));
        if (!command) {
            this.loadCommandComponent(EchoCommandComponent, 'Onbekend commando');
            this.loadCommandComponent(ManCommandComponent);
        } else {
            this.executeCommand(command, args);
        }
    }

    private executeCommand(command: Command, args: string[]): void {
        if (command.clear) {
            this.clearTerminal();
        }
        if (command.component) {
            this.loadCommandComponent(command.component, args, command.data);
        }
    }
}
