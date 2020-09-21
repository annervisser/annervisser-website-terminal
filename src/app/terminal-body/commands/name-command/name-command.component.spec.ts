import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NameCommandComponent} from './name-command.component';

describe('NameCommandComponent', () => {
    let component: NameCommandComponent;
    let fixture: ComponentFixture<NameCommandComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NameCommandComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NameCommandComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
