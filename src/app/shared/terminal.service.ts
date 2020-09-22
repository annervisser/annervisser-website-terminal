import {Injectable} from '@angular/core';
import {ReplaySubject, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TerminalService {
    refocus$: Subject<null> = new ReplaySubject<null>(1);
    hasFocus$: Subject<boolean> = new Subject<boolean>();
    commands$: Subject<string> = new Subject<string>();
}
