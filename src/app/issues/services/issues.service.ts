import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class IssuesService {

  constructor(private http: HttpClient) { }

  getAllIssues(repoURL: string): Observable<any[]> {
    return this.http.get<any[]>(repoURL);
  }

  getAllComments(issueURL: string): Observable<any[]> {
    return this.http.get<any[]>(issueURL);
  }
}
