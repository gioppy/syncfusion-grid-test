import { TestBed } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';
import { of } from "rxjs";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('DashboardService', () => {
  let service: DashboardService;
  let serviceMock: any;

  const dummyData = {
    cards: [
      {
        value: 27,
        label: "Task assegnati"
      },
      {
        value: 13,
        label: "Issue aperte"
      },
      {
        value: 3,
        label: "Progetti in corso"
      },
      {
        value: 12,
        label: "Idee create"
      }
    ],
    tasks: [
      {
        name: "Do You Think Motivational Thoughts",
        status: 2,
        users: ["Rosie Tailor"],
        ends_at: "2022-01-15T00:00:00.00000+02:00",
        priority: 1
      },
      {
        name: "The Basics Of Buying A Telescope",
        status: 2,
        users: ["Rosie Tailor", "Tom Moran"],
        ends_at: "2022-11-15T00:00:00.00000+02:00",
        priority: 2
      },
      {
        name: "Asteroids",
        status: 1,
        users: ["Tom Moran"],
        ends_at: "2022-08-27T00:00:00.00000+02:00",
        priority: 1
      },
      {
        name: "The Glossary Of Telescopes",
        status: 1,
        users: ["Glenn Massey"],
        ends_at: "2022-04-08T00:00:00.00000+02:00",
        priority: 3
      }
    ],
    projects: [
      {
        id: 1,
        name: "How To Look Up",
        project_manager: "Rosie Taylor",
        start_date: "2022-01-01T00:00:00.00000+02:00",
        end_date: "2022-03-31T00:00:00.00000+02:00",
        percentage: 0.3,
        active_tasks: 100,
        active_issues: 20
      },
      {
        id: 2,
        name: "The Basics Of Buying A Telescope",
        project_manager: "Tom Moran",
        start_date: "2021-06-13T00:00:00.00000+02:00",
        end_date: "2021-11-18T00:00:00.00000+02:00",
        percentage: 0,
        active_tasks: 3,
        active_issues: 0
      },
      {
        id: 3,
        name: "Telescopes 101",
        project_manager: "Glenn Massey",
        start_date: "2021-02-25T00:00:00.00000+02:00",
        end_date: "2021-05-17T00:00:00.00000+02:00",
        percentage: 0.85,
        active_tasks: 65,
        active_issues: 124
      }
    ]
  };

  beforeEach(() => {
    serviceMock = jasmine.createSpyObj('DashboardService', ['index']);
    serviceMock.index.and.returnValue(of(dummyData));

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: DashboardService, useValue: serviceMock }
      ]
    });

    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to retrive data from API', (done) => {
    service.index().subscribe((data) => {
      expect(data.cards.length).toBe(4);
      expect(data.tasks.length).toBe(4);
      expect(data.projects.length).toBe(3);
      expect(data).toEqual(dummyData);
      done();
    })
  });
});
