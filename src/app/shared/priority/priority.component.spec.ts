import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityComponent } from './priority.component';
import { By } from "@angular/platform-browser";
import { ChangeDetectorRef, SimpleChange } from "@angular/core";
import { TooltipModule } from "@syncfusion/ej2-angular-popups";

describe('PriorityComponent', () => {
  let component: PriorityComponent;
  let fixture: ComponentFixture<PriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriorityComponent ],
      imports: [ TooltipModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityComponent);
    component = fixture.componentInstance;
    component.priority = {
      value: 1,
      label: 'Bassa'
    }
    fixture.detectChanges();
  });

  describe('HTML', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have basic classes', () => {
      const element = fixture.debugElement.query(By.css('.priority'));
      expect(element).toBeTruthy();
    });

    it('should have low class', () => {
      const element = fixture.debugElement.query(By.css('.priority--1'));
      expect(element).toBeTruthy();
    });

    it('should change priority class', () => {
      component.priority = {
        value: 3,
        label: 'Alta'
      };
      component.ngOnChanges({
        priority: new SimpleChange(null, component.priority, false)
      });
      fixture.componentRef.injector.get(ChangeDetectorRef).detectChanges();
      const element = fixture.debugElement.query(By.css('.priority'));
      expect(element.nativeElement.classList.contains('priority')).toBeTrue();
      expect(element.nativeElement.classList.contains('priority--3')).toBeTrue();
      expect(element.nativeElement.classList.contains('priority--1')).toBeFalse();
    });

    it('should have label', () => {
      const element = fixture.debugElement.query(By.css('.priority__label'));
      expect(element.nativeElement.textContent).toBe('Bassa');
    });

    it('should have icon', () => {
      const element = fixture.debugElement.query(By.css('.priority__icon'));
      expect(element).toBeTruthy();
    });

    it('should have slim view', () => {
      component.slim = true;
      component.ngOnChanges({
        slim: new SimpleChange(false, component.slim, false)
      });
      fixture.componentRef.injector.get(ChangeDetectorRef).detectChanges();
      const element = fixture.debugElement.query(By.css('.priority__label--slim'));
      expect(element).toBeTruthy();
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
