import {Component, OnInit} from '@angular/core';
import {CommandOutput} from '@shared/command-output';

enum PortfolioCommands {
    Base,
    AnnerVisser,
    PwsRailSimulation,
    Tmobile,
    GameBots
}

@Component({
    selector: 'app-curriculum-vitae-command',
    template: `
        <div [ngSwitch]="command" [class.limit-width]="command !== PortfolioCommands.Base">
            <ng-container *ngSwitchCase="PortfolioCommands.Base">
                <h2>Portfolio</h2>

                <h3><a appCommandLink="portfolio annervisser.nl">annervisser.nl</a>:</h3>
                <p>Deze website. Een persoonlijke portfolio die eruit ziet en werkt als een terminal in Ubuntu.</p>

                <h3><a appCommandLink="portfolio t-mobile">T-mobile auto-renew</a>:</h3>
                <p>Python command-line programma dat automatisch 1GB aanvullers aanvraagt zodra de daglimiet bijna wordt
                    bereikt. Zo wordt onbeperkte data daadwerkelijk onbeperkt.</p>

                <h3><a appCommandLink="portfolio rail-simulation">Rail simulatie</a>:</h3>
                <p>Profielwerkstuk project dat een railsysteem en de treinen er op simuleert.</p>

                <h3><a appCommandLink="portfolio game-bots">Bordspel bots</a>:</h3>
                <p>Desktop programma's die automatisch & optimaal bord- en kaartspellen als Set en Cluedo spelen.</p>
            </ng-container>

            <ng-container *ngSwitchCase="PortfolioCommands.AnnerVisser">
                <p>
                    Een pixel-perfect kopie van Ubuntu's gnome-terminal. Ontwikkeld in Angular zonder back-end. Probeert
                    binnen de browser de ervaring van de terminal zo goed mogelijk na te bootsen. Extra functionaliteit
                    zorgt voor een goede ervaring voor iedereen, ook zonder terminal-ervaring.
                </p>
                <p>
                    De terminal werkt door middel van Angular's <i>Dynamic component loading</i>, wat ervoor zorgt dat de
                    terminal input en output volledig binnen Angular components kunnen worden geschreven.<br>
                    Uitgebreid gebruik van RXJS Subjects zorgt ervoor dat events door de applicatie kunnen worden
                    verstuurd en verwerkt zonder dat componenten closely coupled zijn.
                </p>
            </ng-container>

            <ng-container *ngSwitchCase="PortfolioCommands.Tmobile">
                <p>
                    Een python applicatie die de gebruikte data opvraagt, en wanneer deze bijna de limiet
                    bereikt automatisch een 1GB aanvuller aanvraagt. De gebruikte data wordt met regelmatige tussenpozen
                    gecontroleerd, deze tussenpozen worden steeds korter naarmate de limiet dichterbij komt.
                    De applicatie maakt gebruik van T-mobile's Customer API, waarvoor het access token is verkregen door
                    reverse-engineering van hun Android app.
                </p>
                <p>
                    Het gebruik van deze applicatie zorgt ervoor dat een abonnement met onbeperkte data daadwerkelijk
                    onbeperkt kan worden gebruikt, zonder dat er steeds handmatig een aanvuller moet worden aangevraagd.
                    Uiteraard wordt deze applicatie uitsluitend gebruikt voor persoonlijke doeleinden en binnen de
                    fair-use policy.
                </p>
            </ng-container>

            <ng-container *ngSwitchCase="PortfolioCommands.PwsRailSimulation">
                <p>
                    Software geschreven in C# met Monogame, welke een rail systeem en de treinen daarop simuleert.
                    De applicatie is vergelijkbaar met hoe de applicatie van ProRail er uit ziet, waar seinen en wissels
                    mee worden aangestuurd.
                </p>
            </ng-container>

            <ng-container *ngSwitchCase="PortfolioCommands.GameBots">
                <p>
                    Een set applicatie voor verschillende spellen, allemaal geschreven in C#. Deze programma's lossen
                    de spellen zo snel en optimaal mogelijk op.
                </p>
                <p>
                    SetBot is gemaakt voor het spel Set. Het neemt een foto of webcam-input van een tafel met de
                    speelkaarten, en laat alle mogelijke sets met die kaarten zijn. Het herkent de kleur, het type en
                    het aantal vormen op elke kaart, en rekent hiermee vervolgens mogelijke combinaties uit.
                </p>
                <p>
                    ClueBot is gemaakt voor het spel Cluedo. Het heeft een interface waarin alle zetten van het spel
                    kunnen worden ingevoerd. Een speler vult de eigen kaarten, alle gemaakte verdenkingen en alle
                    getoonde kaarten in. Vervolgens houdt het programma op basis daarvan bij welke spelers welke kaarten
                    wel of niet hebben, en kan na voldoende input bepalen wat de oplossing is. Door gebruik te maken van
                    data die moeilijk is bij te houden op papier (bijvoorbeeld wie een bepaalde kaart zeker <b>niet</b>
                    heeft) kan het programma de oplossing sneller vinden dan een gemiddelde speler.
                </p>
            </ng-container>
        </div>
        <div style="color: #999" *ngIf="command !== PortfolioCommands.Base">
            <br>
            <a appCommandLink="portfolio">Terug naar overzicht</a>
        </div>
        <!-- [ENGLISH] -->
        <!-- <div [ngSwitch]="command" [class.limit-width]="command !== PortfolioCommands.Base">
            <ng-container *ngSwitchCase="PortfolioCommands.Base">
                <h2>Portfolio</h2>
                <h2><a appCommandLink="portfolio annervisser.nl">annervisser.nl</a>:</h2>
                <p>This website. A personal portfolio website that behaves and looks like a terminal on Ubuntu.</p>

                <h2><a appCommandLink="portfolio t-mobile">T-mobile auto-renew</a>:</h2>
                <p>Python command-line program that automatically requests 1GB add-ons when data is low to actually
                    make data unlimited.</p>

                <h2><a appCommandLink="portfolio rail-simulation">Rail simulation</a>:</h2>
                <p>High school final project that simulates a rail system and the trains on it.</p>

                <h2><a appCommandLink="portfolio game-bots">Boardgame bots</a>:</h2>
                <p>Computer programs to automatically/optimally play board and card games like Set and Cluedo.</p>
            </ng-container>

            <ng-container *ngSwitchCase="PortfolioCommands.AnnerVisser">
                <p>A pixel-perfect recreation of the Ubuntu's gnome-terminal. Written in Angular without a
                    back-end. Tries to recreate the experience of the terminal as accurately as possible,
                    with additional features to make it a good experience for people without terminal experience as
                    well.</p>

                <p>The terminal interface is made possible by using Angular's Dynamic component loading, allowing for
                    command input and output to be entirely written within Angular components.<br>
                    Extensive use of RXJS Subject's allows events to be passed around the application without close
                    coupling.
                </p>
            </ng-container>

            <ng-container *ngSwitchCase="PortfolioCommands.Tmobile">
                <p>A python application that automatically checks for data usage, and automatically requests add-ons to
                    prevent data from running out. It uses T-mobile's Customer API with an access token gained by
                    reverse-engineering their Android application. It checks data usage every few minutes, when data is
                    about to run out is checks more often.
                </p>
            </ng-container>

            <ng-container *ngSwitchCase="PortfolioCommands.PwsRailSimulation">
                <p>Software written in C# that simulates a rail system and the trains on it. Similar to what the
                    application used by ProRail looks like, which is used to control railroad signals and switches.
                </p>
            </ng-container>

            <ng-container *ngSwitchCase="PortfolioCommands.GameBots">
                <p>Multiple applications written in C# that try to play or aid in playing certain board and card games
                    optimally. SetBot takes an image of a table with cards from the game Set and detects their shape,
                    colour and number to then show all possible sets on the table.<br>
                    ClueBot has an interface that allows a player to input all suspicions and reactions they make and
                    receive during a game of Clue (Dutch: Cluedo). It then uses this information to display a table of
                    possible combinations that is more exhaustive than what a human can easily track.
                </p>
            </ng-container>
        </div>
        <div style="color: #999" *ngIf="command !== PortfolioCommands.Base">
            <br>
            <a appCommandLink="portfolio">Back to portfolio overview</a>
        </div>-->
        <br>`,
    styles: [`
        :host {
            display: block;
            /*max-width: 450px;*/
        }

        .limit-width {
            max-width: 450px;
        }
    `]
})
export class PortfolioCommandComponent extends CommandOutput implements OnInit {
    PortfolioCommands = PortfolioCommands;
    command: PortfolioCommands = PortfolioCommands.Base;

    ngOnInit(): void {
        switch (this.input[0] || null) {
            case 'annervisser.nl':
            case 'annervisser':
            case 'website':
                this.command = PortfolioCommands.AnnerVisser;
                break;
            case 'pws':
            case 'profielwerkstuk':
            case 'rail-simulation':
            case 'railsimulation':
                this.command = PortfolioCommands.PwsRailSimulation;
                break;
            case 'tmobile':
            case 't-mobile':
            case 'auto-renew':
                this.command = PortfolioCommands.Tmobile;
                break;
            case 'gamebots':
            case 'game-bots':
                this.command = PortfolioCommands.GameBots;
                break;
        }
    }
}
