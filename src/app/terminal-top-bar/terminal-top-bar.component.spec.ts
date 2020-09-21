import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TerminalTopBarComponent} from './terminal-top-bar.component';

describe('TerminalTopBarComponent', () => {
    let component: TerminalTopBarComponent;
    let fixture: ComponentFixture<TerminalTopBarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TerminalTopBarComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TerminalTopBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
