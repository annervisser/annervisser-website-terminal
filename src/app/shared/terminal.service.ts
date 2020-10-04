import {Injectable} from '@angular/core';
import {ReplaySubject, Subject} from 'rxjs';
import {filter} from 'rxjs/operators';

const HISTORY_SIZE = 999; // bash's default on ubuntu

@Injectable({
    providedIn: 'root'
})
export class TerminalService {
    refocus$: Subject<null> = new ReplaySubject<null>(1);
    hasFocus$: Subject<boolean> = new Subject<boolean>();
    commands$: Subject<string> = new Subject<string>();
    input$: Subject<string> = new Subject<string>();
    inputHistory: string[] = [];

    constructor() {
        this.commands$
            .pipe(filter((input) => !!(input ? input.trim() : '')))
            .subscribe((input) => {
                if (this.inputHistory.length >= HISTORY_SIZE) {
                    this.inputHistory.pop();
                }
                this.inputHistory.unshift(input);
            });
    }
}
