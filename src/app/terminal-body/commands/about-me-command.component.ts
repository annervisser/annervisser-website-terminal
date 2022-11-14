import { Component } from '@angular/core';
import { CommandOutput } from '@shared/command-output';

@Component({
    selector: 'app-about-me-command',
    template: `
        <b>Over mij</b><br>
        <p>
            Ik ben een enthousiaste Full stack software developer met uitgebreide ervaring in web development.
            Naast software maken spendeer ik mijn tijd graag met het up-to-date blijven met het laatste tech-nieuws,
            knutselen met elektronica of met me verdiepen in een nieuwe interesse.
        </p>

        <b>Volgens een oud-collega</b><br>
        <p>
            Full stack developer met oog voor detail.<br>
            Ondanks zijn jonge leeftijd heeft Anner al veel ervaring met software&shy;ontwikkeling. Een sympathieke en slimme jongen die nieuwe technieken snel oppakt en zich
            eigen maakt. Hij weet zijn weg te vinden in ingewikkelde code en is daarnaast een verrijking voor de
            teamspirit.
        </p>
        <div class="links">
            <br>
            <a appCommandLink="help">Alle commando's</a>
        </div>
        <br>`,
    styles: [`
        :host {
            display: block;
            max-width: 450px;
        }
    `]
})
export class AboutMeCommandComponent extends CommandOutput {
}
