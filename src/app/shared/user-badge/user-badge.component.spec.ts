import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBadgeComponent } from './user-badge.component';
import { By } from "@angular/platform-browser";
import { TooltipModule } from "@syncfusion/ej2-angular-popups";
import { ChangeDetectorRef } from "@angular/core";

describe('UserBadgeComponent', () => {
  let component: UserBadgeComponent;
  let fixture: ComponentFixture<UserBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBadgeComponent ],
      imports: [ TooltipModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBadgeComponent);
    component = fixture.componentInstance;
    component.name = 'Demo User';
    fixture.detectChanges();
  });

  describe('HTML', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have user badge', () => {
      const element = fixture.debugElement.query(By.css('.user-badge'));
      expect(element).toBeTruthy();
    });

    it('should have initial', () => {
      const element = fixture.debugElement.query(By.css('.user-badge__initial'));
      expect(element).toBeTruthy();
      expect(element.nativeElement.textContent).toBe('DU');
    });

    it('should have tooltip', (done) => {
      setTimeout(() => {
        const element = fixture.debugElement.query(By.css('.e-tooltip'));
        expect(element).toBeTruthy();
        done();
      }, 0);
    });

    it('should have user name', () => {
      const element = fixture.debugElement.query(By.css('.user-badge__name'));
      expect(element).toBeTruthy();
      expect(element.nativeElement.textContent).toBe('Demo User');
    });

    it('should hide user name', () => {
      component.onlyInitial = true;
      fixture.componentRef.injector.get(ChangeDetectorRef).detectChanges();
      const element = fixture.debugElement.query(By.css('.user-badge__name'));
      expect(element).toBeFalsy();
    });

    it('should have description', () => {
      const elementBefore = fixture.debugElement.query(By.css('.user-badge__description'));
      expect(elementBefore).toBeFalsy();
      component.description = 'Role';
      fixture.componentRef.injector.get(ChangeDetectorRef).detectChanges();
      const elementAfter = fixture.debugElement.query(By.css('.user-badge__description'));
      expect(elementAfter).toBeTruthy();
      expect(elementAfter.nativeElement.textContent).toBe('Role');
    });
  });
});
