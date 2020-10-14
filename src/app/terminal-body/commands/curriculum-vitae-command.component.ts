import {Component, OnInit} from '@angular/core';
import {CommandOutput} from '@shared/command-output';

enum CvCommands {
    Base,
    Experience,
    Skills,
    Education
}

@Component({
    selector: 'app-curriculum-vitae-command',
    template: `
        <div [ngSwitch]="command">
            <ng-container *ngSwitchCase="CvCommands.Base">
                <h2>Anner Visser</h2>
                <ul>
                    <li>Woonplaats: Zwolle</li>
                    <li>Leeftijd: 20 (born 26-03-2000)</li>
                    <li>Telefoon: <a href="tel:0031611263137">06 11263137</a></li>
                    <li>E-mail: <a href="mailto:mail@annervisser.nl">mail@annervisser.nl</a></li>
                </ul>
            </ng-container>

            <ng-container *ngSwitchCase="CvCommands.Experience">
                <b>Persistence IT, Zwolle</b> jun 2017 – sep 2020<br>
                Full stack developer
            </ng-container>

            <ng-container *ngSwitchCase="CvCommands.Skills">
                <h2>Software ontwikkeling</h2>
                Java Spring, Angular2, Symfony, Laravel, Python Tornado, NativeScript, Mendix<br>
                <br>
                <h2>Software</h2>
                Software architectuur, Database design, SCRUM, Informatiebeveiliging, Linux systeembeheer,
                Application Monitoring
            </ng-container>

            <ng-container *ngSwitchCase="CvCommands.Education">
                <b>Opleiding</b><br>
                <table class="row-line-breaks">
                    <tr>
                        <td>2017:</td>
                        <td>
                            <b>Propedeuse HBO ICT</b><br>
                            Windesheim, Zwolle
                        </td>
                    </tr>
                    <tr>
                        <td>2016:</td>
                        <td><b>VWO Informatica</b><br>
                            JenaXL, Zwolle
                        </td>
                    </tr>
                    <tr>
                        <td>2016:</td>
                        <td><b>Havo</b><br>
                            JenaXL, Zwolle
                        </td>
                    </tr>
                </table>
            </ng-container>
        </div>
        <div class="links">
            <br>
            <h4>Lees meer over:</h4>
            <ul>
                <li [hidden]="command === CvCommands.Experience"><a appCommandLink="cv experience">Werkervaring</a></li>
                <li [hidden]="command === CvCommands.Skills"><a appCommandLink="cv skills">Vaardigheden</a></li>
                <li [hidden]="command === CvCommands.Education"><a appCommandLink="cv education">Opleiding</a><br></li>
                <li><a appCommandLink="help">Alle commando's</a></li>
            </ul>
        </div>
        <br>`,
    styles: [`
        :host {
            display: block;
            max-width: 450px;
        }
    `]
})
export class CurriculumVitaeCommandComponent extends CommandOutput implements OnInit {
    CvCommands = CvCommands;
    command: CvCommands = CvCommands.Base;

    ngOnInit(): void {
        switch (this.input[0] || null) {
            case 'experience':
            case 'work':
            case 'jobs':
            case 'job':
                this.command = CvCommands.Experience;
                break;
            case 'skills':
            case 'skill':
                this.command = CvCommands.Skills;
                break;
            case 'education':
            case 'study':
                this.command = CvCommands.Education;
                break;
        }
    }
}


// Template English:
/*        <div [ngSwitch]="command">
            <ng-container *ngSwitchCase="CvCommands.Base">
                <h2>Anner Visser</h2>
                <ul>
                    <li>City: Zwolle</li>
                    <li>Age: 20 (born 26-03-2000)</li>
                    <li>Phone: <a href="tel:0031611263137">06 11263137</a></li>
                    <li>E-mail: <a href="mailto:mail@annervisser.nl">mail@annervisser.nl</a></li>
                </ul>
            </ng-container>

            <ng-container *ngSwitchCase="CvCommands.Experience">
                <b>Persistence IT, Zwolle</b> jun 2017 – sep 2020<br>
                Full stack developer
            </ng-container>

            <ng-container *ngSwitchCase="CvCommands.Skills">
                <h2>Software development</h2>
                Java Spring, Angular2, Symfony, Laravel, Python Tornado, NativeScript, Mendix<br>
                <br>
                <h2>Software</h2>
                Software architecture, Database design, SCRUM, Information security, Linux sysadmin, Application Monitoring
            </ng-container>

            <ng-container *ngSwitchCase="CvCommands.Education">
                <b>Education</b><br>
                <table class="row-line-breaks">
                    <tr>
                        <td>2017:</td>
                        <td>
                            <b>Propedeuse HBO ICT</b><br>
                            Windesheim, Zwolle
                        </td>
                    </tr>
                    <tr>
                        <td>2016:</td>
                        <td><b>VWO Informatica</b><br>
                            JenaXL, Zwolle
                        </td>
                    </tr>
                    <tr>
                        <td>2016:</td>
                        <td><b>Havo</b><br>
                            JenaXL, Zwolle
                        </td>
                    </tr>
                </table>
            </ng-container>
        </div>
        <div style="color: #999">
            <br>
            <h4>Read more about:</h4>
            <ul>
                <li [hidden]="command === CvCommands.Experience"><a
                    appCommandLink="cv experience">Work experience</a></li>
                <li [hidden]="command === CvCommands.Skills"><a appCommandLink="cv skills">Skills</a></li>
                <li [hidden]="command === CvCommands.Education"><a appCommandLink="cv education">Education</a></li>
            </ul>
        </div>*/
