import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TerminalBodyComponent} from './terminal-body/terminal-body.component';
import {TerminalTopBarComponent} from './terminal-top-bar/terminal-top-bar.component';
import {CommandHostDirective} from '@shared/command-host.directive';
import {EchoCommandComponent} from './terminal-body/commands/echo-command.component';
import {UserInputComponent} from './terminal-body/user-input/user-input.component';
import {FormsModule} from '@angular/forms';
import {ContactCommandComponent} from './terminal-body/commands/contact-command.component';
import {ManCommandComponent} from './terminal-body/commands/man-command.component';
import {AboutMeCommandComponent} from './terminal-body/commands/about-me-command.component';
import {CurriculumVitaeCommandComponent} from './terminal-body/commands/curriculum-vitae-command.component';
import {CommandLinkDirective} from '@shared/command-link.directive';
import {PortfolioCommandComponent} from './terminal-body/commands/portfolio-command.component';

@NgModule({
    declarations: [
        AppComponent,
        TerminalBodyComponent,
        TerminalTopBarComponent,
        CommandHostDirective,
        EchoCommandComponent,
        ContactCommandComponent,
        ManCommandComponent,
        UserInputComponent,
        AboutMeCommandComponent,
        CurriculumVitaeCommandComponent,
        CommandLinkDirective,
        PortfolioCommandComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
