import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from "../shared/models/state";
import { Subject, takeUntil } from "rxjs";
import { DashboardCard, DashboardProject } from "../shared/models/dashboard";
import { Table } from "../shared/models/table";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  tasks!: Table;
  private subjects$ = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.tasks = {
      "rows": [
        {
          "name": "Do You Think Motivational Thoughts",
          "status": {
            "value": 2,
            "label": "In corso"
          },
          "users": [
            "Rosie Tailor"
          ],
          "ends_at": "2022-01-15T00:00:00.00000+02:00",
          "priority": {
            "value": 1,
            "label": "Bassa"
          }
        },
        {
          "name": "The Basics Of Buying A Telescope",
          "status": {
            "value": 2,
            "label": "In corso"
          },
          "users": [
            "Rosie Tailor",
            "Tom Moran"
          ],
          "ends_at": "2022-11-15T00:00:00.00000+02:00",
          "priority": {
            "value": 2,
            "label": "Media"
          }
        },
        {
          "name": "Asteroids",
          "status": {
            "value": 1,
            "label": "Da fare"
          },
          "users": [
            "Tom Moran"
          ],
          "ends_at": "2022-08-27T00:00:00.00000+02:00",
          "priority": {
            "value": 1,
            "label": "Bassa"
          }
        },
        {
          "name": "The Glossary Of Telescopes",
          "status": {
            "value": 1,
            "label": "Da fare"
          },
          "users": [
            "Glenn Massey"
          ],
          "ends_at": "2022-04-08T00:00:00.00000+02:00",
          "priority": {
            "value": 3,
            "label": "Alta"
          }
        }
      ],
      "settings": {
        "columns": [
          {
            "name": "status",
            "label": "",
            "component": "status",
            "allow_sorting": false,
            "allow_filtering": false
          },
          {
            "name": "name",
            "label": "Nome",
            "component": "default",
            "allow_sorting": false,
            "allow_filtering": false
          },
          {
            "name": "users",
            "label": "Utenti",
            "component": "user-badges",
            "allow_sorting": false,
            "allow_filtering": false
          },
          {
            "name": "ends_at",
            "label": "Scadenza",
            "component": "date",
            "allow_sorting": false,
            "allow_filtering": false
          },
          {
            "name": "priority",
            "label": "Priorità",
            "component": "priority",
            "allow_sorting": false,
            "allow_filtering": false
          }
        ],
        "sorting": false,
        "grouping": false
      }
    }
  }

  ngOnDestroy(): void {
    this.subjects$.next(null);
    this.subjects$.complete();
  }

}
