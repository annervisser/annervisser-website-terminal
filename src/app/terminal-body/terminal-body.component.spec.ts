import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TerminalBodyComponent} from './terminal-body.component';

describe('TerminalBodyComponent', () => {
    let component: TerminalBodyComponent;
    let fixture: ComponentFixture<TerminalBodyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TerminalBodyComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TerminalBodyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
