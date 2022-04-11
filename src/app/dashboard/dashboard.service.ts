import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { DashboardRequest } from "../shared/models/dashboard";

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) { }

  index(): Observable<DashboardRequest> {
    return this.http.get<DashboardRequest>(`${environment.api}/dashboard`);
  }
}
