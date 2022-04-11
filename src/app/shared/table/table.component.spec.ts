import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { GridModule } from "@syncfusion/ej2-angular-grids";
import { UserBadgeModule } from "../user-badge/user-badge.module";
import { FavoriteModule } from "../favorite/favorite.module";
import { TagModule } from "../tag/tag.module";
import { By } from "@angular/platform-browser";

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      imports: [
        GridModule,
        UserBadgeModule,
        FavoriteModule,
        TagModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.table = {
      rows: [
        {
          favorite: false,
          id: "2022.001",
          name: "Shooting Stars",
          category: "Sviluppo",
          project_manager: "Logan Munoz",
          type: "Progetto",
          status: "In corso",
          phase: "Fase 1",
          start_date: "2022-01-01T00:00:00.00000+00:00",
          end_date: "2022-03-31T00:00:00.00000+00:00",
          operations: ""
        }
      ],
      settings: {
        columns: [
          {
            name: "favorite",
            label: "",
            component: "favorite",
            allow_sorting: false,
            allow_filtering: false
          },
          {
            name: "id",
            label: "ID",
            component: "default",
            allow_sorting: true,
            allow_filtering: true
          },
          {
            name: "name",
            label: "Nome",
            component: "default",
            allow_sorting: true,
            allow_filtering: true
          },
          {
            name: "category",
            label: "Categoria",
            component: "tag",
            allow_sorting: true,
            allow_filtering: true
          },
          {
            name: "project_manager",
            label: "Project manager",
            component: "user-badge",
            allow_sorting: true,
            allow_filtering: true
          },
          {
            name: "type",
            label: "Tipologia",
            component: "tag",
            allow_sorting: true,
            allow_filtering: true
          },
          {
            name: "status",
            label: "Stato",
            component: "default",
            allow_sorting: true,
            allow_filtering: true
          },
          {
            name: "phase",
            label: "Fase",
            component: "default",
            allow_sorting: true,
            allow_filtering: true
          },
          {
            name: "start_date",
            label: "Data di inizio",
            component: "date",
            allow_sorting: true,
            allow_filtering: false
          },
          {
            name: "end_date",
            label: "Data di fine",
            component: "date",
            allow_sorting: true,
            allow_filtering: false
          },
          {
            name: "operations",
            label: "",
            component: "op",
            allow_sorting: false,
            allow_filtering: false
          }
        ],
        sorting: true,
        grouping: true,
        context_menu: [
          { text: 'Informazioni' },
          { text: 'Struttura' },
          { text: 'SAL' },
          { text: 'Issue' },
          { text: 'Documenti' },
          { text: 'Log' },
          { separator: true },
          { text: 'Crea template' },
          { text: 'Modifica' },
          { text: 'Elimina' }
        ],
        filters: {
          type: "Excel"
        },
        toolbar: ["Search"],
        page: {
          pageSize: 12
        }
      }
    };
    fixture.detectChanges();
  });

  describe('HTML', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have grid', (done) => {
      setTimeout(() => {
        const element = fixture.debugElement.query(By.css('.grid'));
        expect(element).toBeTruthy();
        done();
      }, 0);
    });
  });
});
