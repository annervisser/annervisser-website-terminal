import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TerminalCursorComponent} from './terminal-cursor.component';

describe('TerminalCursorComponent', () => {
    let component: TerminalCursorComponent;
    let fixture: ComponentFixture<TerminalCursorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TerminalCursorComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TerminalCursorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
