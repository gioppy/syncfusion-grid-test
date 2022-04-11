import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagComponent } from './tag.component';
import { By } from "@angular/platform-browser";

describe('TagComponent', () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagComponent);
    component = fixture.componentInstance;
    component.content = 'Demo';
    fixture.detectChanges();
  });

  describe('HTML', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have tag', () => {
      const element = fixture.debugElement.query(By.css('.tag'));
      expect(element).toBeTruthy();
    });

    it('should have content', () => {
      const element = fixture.debugElement.query(By.css('.tag'));
      expect(element.nativeElement.textContent).toBe('Demo');
    });
  });
});
