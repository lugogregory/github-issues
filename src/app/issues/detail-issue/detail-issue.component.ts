import { Component, OnInit } from '@angular/core';
import { loadIssuesRequest } from '../redux/actions';
import { Store, select } from '@ngrx/store';
import { CommentsModuleState } from '../redux/states';
import { Comment } from '../models';
import { Observable } from 'rxjs';
import { getVisibleComments } from '../redux/selectors/comments.selector';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detail-issue',
  templateUrl: './detail-issue.component.html',
  styles: []
})
export class DetailIssueComponent implements OnInit {

  public repoInput: string;
  comments$: Observable<Comment[]>;

  constructor(
    private store: Store<CommentsModuleState>,
    private router: Router
  ) {
    this.comments$ = this.store.pipe(
      select(getVisibleComments)
    );
  }

  goToHome() {
    this.router.navigate(['./total-issues']);
  }

  ngOnInit(): void {
  }

}
