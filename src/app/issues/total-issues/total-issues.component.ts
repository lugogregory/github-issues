import { Component, OnInit } from '@angular/core';
import { loadIssuesRequest, loadCommentsRequest } from '../redux/actions';
import { Store, select } from '@ngrx/store';
import { IssuesModuleState } from '../redux/states';
import { Issue } from '../models';
import { Observable } from 'rxjs';
import { getVisibleIssues } from '../redux/selectors/issues.selector';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-total-issues',
  templateUrl: './total-issues.component.html',
  styles: []
})
export class TotalIssuesComponent implements OnInit {

  public repoInput: string;
  issues$: Observable<Issue[]>;

  apiRequest = 'https://api.github.com/repos/';

  constructor(
    private store: Store<IssuesModuleState>,
    private toastrService: ToastrService
  ) {

    this.issues$ = this.store.pipe(
      select(getVisibleIssues)
    );
  }

  ngOnInit(): void {
  }

  deserialize(repo: string): string | null {
    const data: any[] = repo.split('/');
    if ( data && data.length >= 5 ) {
      const user = data[3];
      const rep = data[4];
      return `${this.apiRequest}${user}/${rep}/issues?state=all`;
    }
    return null;
  }

  getIssues(repo: string = this.repoInput): string | null {
    if ( repo && repo.length > 0 ) {
      const url = this.deserialize(repo);
      if ( url ) {
        const action = loadIssuesRequest({repoUrl: url});
        this.store.dispatch(action);
        return url;
      } else {
        this.toastrService.warning(
          'URL incorrecta, debe tener éste formato: https://github.com/USUARIO/REPO',
          'Atención'
        );
        // return null;
      }
    }
  }

  getComments(issueSelect) {
    if ( issueSelect ) {
      const action = loadCommentsRequest({issueUrl: issueSelect.comments_url});
      this.store.dispatch(action);
    }
  }

}
