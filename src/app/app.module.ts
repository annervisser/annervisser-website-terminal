import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TerminalBodyComponent} from './terminal-body/terminal-body.component';
import {TerminalTopBarComponent} from './terminal-top-bar/terminal-top-bar.component';
import {TerminalCursorComponent} from './terminal-body/terminal-cursor/terminal-cursor.component';
import {CommandHostDirective} from './terminal-body/command-host.directive';
import {NameCommandComponent} from './terminal-body/commands/name-command/name-command.component';
import {EchoCommandComponent} from './terminal-body/commands/echo-command.component';
import {UserInputComponent} from './terminal-body/user-input/user-input.component';
import {FormsModule} from '@angular/forms';
import {ContactCommandComponent} from './terminal-body/commands/contact-command.component';
import {ManCommandComponent} from './terminal-body/commands/man-command.component';

@NgModule({
    declarations: [
        AppComponent,
        TerminalBodyComponent,
        TerminalTopBarComponent,
        TerminalCursorComponent,
        CommandHostDirective,
        NameCommandComponent,
        EchoCommandComponent,
        ContactCommandComponent,
        ManCommandComponent,
        UserInputComponent
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
