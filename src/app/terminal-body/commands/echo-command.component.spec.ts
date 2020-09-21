import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EchoCommandComponent} from './echo-command.component';

describe('EchoCommandComponent', () => {
    let component: EchoCommandComponent;
    let fixture: ComponentFixture<EchoCommandComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EchoCommandComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EchoCommandComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
