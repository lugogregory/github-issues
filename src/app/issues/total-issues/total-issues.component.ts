import { Component, OnInit } from '@angular/core';
import { loadIssuesRequest, loadCommentsRequest } from '../redux/actions';
import { Store, select } from '@ngrx/store';
import { IssuesModuleState } from '../redux/states';
import { Issue } from '../models';
import { Observable } from 'rxjs';
import { getVisibleIssues } from '../redux/selectors/issues.selector';
import Swal from 'sweetalert2';


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
  ) {

    this.issues$ = this.store.pipe(
      select(getVisibleIssues)
    );
  }

  ngOnInit(): void {
  }

  getIssues() {
    if ( this.repoInput && this.repoInput.length > 0 ) {

      // https://api.github.com/repos/lugogregory/weather-app/issues
      // https://github.com/tj/go-naturaldate/

      const data: any[] = this.repoInput.split('/');
      console.log(data);
      if ( data && data.length >= 5 ) {
        const user = data[3];
        const repo = data[4];
        const action = loadIssuesRequest({repoUrl: `${this.apiRequest}${user}/${repo}/issues`});
        this.store.dispatch(action);
      } else {
        Swal.fire({ title: 'Atención', text: 'URL incorrecta, debe tener éste formato: https://github.com/USUARIO/REPO', icon: 'warning' });
      }
    }
  }

  getComments(issueSelect) {
    if ( issueSelect ) {
      console.log(issueSelect);
      const action = loadCommentsRequest({issueUrl: issueSelect.comments_url});
      this.store.dispatch(action);
    }
  }

}
