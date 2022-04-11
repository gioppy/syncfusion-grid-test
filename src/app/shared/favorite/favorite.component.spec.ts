import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteComponent } from './favorite.component';
import { By } from "@angular/platform-browser";
import { ChangeDetectorRef } from "@angular/core";

describe('FavoriteComponent', () => {
  let component: FavoriteComponent;
  let fixture: ComponentFixture<FavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('HTML', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have favorite icon', () => {
      const element = fixture.debugElement.query(By.css('.favorite'));
      expect(element).toBeTruthy();
      expect(element.nativeElement.classList.contains('favorite--selected')).toBeFalse();
    });

    it('should have favorite selected', () => {
      component.selected = true;
      fixture.componentRef.injector.get(ChangeDetectorRef).detectChanges();
      const element = fixture.debugElement.query(By.css('.favorite--selected'));
      expect(element).toBeTruthy();
    });
  });
});
