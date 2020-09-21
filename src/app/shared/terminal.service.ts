import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TerminalService {
    refocus$: Subject<null> = new Subject<null>();
    hasFocus$: Subject<boolean> = new Subject<boolean>();

    constructor() {
    }
}
