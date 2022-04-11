import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { By } from "@angular/platform-browser";
import { UserBadgeModule } from "../shared/user-badge/user-badge.module";
import { TableModule } from "../shared/table/table.module";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DashboardComponent
      ],
      imports: [
        UserBadgeModule,
        TableModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('HTML', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have tasks', (done) => {
      setTimeout(() => {
        const element = fixture.debugElement.query(By.css('.tasks'));
        expect(element).toBeTruthy();
        done();
      }, 0);
    });

    it('should have lists', (done) => {
      setTimeout(() => {
        expect(component.tasks.rows.length).toBe(4);
        done();
      }, 0);
    });
  });
});
