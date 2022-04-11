import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusComponent } from './status.component';
import { By } from "@angular/platform-browser";
import { ChangeDetectorRef, SimpleChange } from "@angular/core";
import { TooltipModule } from "@syncfusion/ej2-angular-popups";

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusComponent ],
      imports: [ TooltipModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    component.status = {
      value: 1,
      label: 'Da fare'
    };
    fixture.detectChanges();
  });

  describe('HTML', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have basic classes', () => {
      const element = fixture.debugElement.query(By.css('.status'));
      expect(element).toBeTruthy();
    });

    it('should have todo class', () => {
      const element = fixture.debugElement.query(By.css('.status--1'));
      expect(element).toBeTruthy();
    });

    it('should change status class', () => {
      component.status = {
        value: 3,
        label: 'Completato'
      };
      component.ngOnChanges({
        status: new SimpleChange(null, component.status, false)
      });
      fixture.componentRef.injector.get(ChangeDetectorRef).detectChanges();
      const element = fixture.debugElement.query(By.css('.status'));
      expect(element.nativeElement.classList.contains('status')).toBeTrue();
      expect(element.nativeElement.classList.contains('status--3')).toBeTrue();
      expect(element.nativeElement.classList.contains('status--1')).toBeFalse();
    });

    it('should have tooltip', (done) => {
      setTimeout(() => {
        const element = fixture.debugElement.query(By.css('.e-tooltip'));
        expect(element).toBeTruthy();
        done();
      }, 0);
    });
  });
});
