import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, mergeMap, map } from 'rxjs/operators';
import Swal from 'sweetalert2';



import {
    loadIssues,
    loadComments,
    loadIssuesRequest,
    loadIssuesSuccess,
    loadIssuesFail,
    loadCommentsRequest,
    loadCommentsSuccess,
    loadCommentsFail,
} from '../actions';

import { IssuesService } from '../../services/issues.service';

@Injectable()
export class IssuesEffects {

  constructor(
    private actions$: Actions,
    private issuesService: IssuesService
  ) { }

  loadIssuesRequest = createEffect(() => this.actions$.pipe(
    ofType(loadIssuesRequest),
      switchMap((action) => {
      return this.issuesService.getAllIssues(action.repoUrl)
        .pipe(
          mergeMap((issues) => [
            loadIssues({ issues }),
            loadIssuesSuccess(),
          ]),
          catchError(error => {
            Swal.fire({ title: 'Atención', text: 'URL de repositorio no existe o no tiene issues', icon: 'warning' });
            return of(loadIssuesFail({ error }));
          }
          ),
        );
    }),
  ));

  loadCommentsRequest = createEffect(() => this.actions$.pipe(
    ofType(loadCommentsRequest),
      switchMap((action) => {
      return this.issuesService.getAllComments(action.issueUrl)
        .pipe(
          mergeMap((comments) => [
            loadComments({ comments }),
            loadCommentsSuccess(),
          ]),
          catchError(error => {
            Swal.fire({ title: 'Atención', text: 'No existen comentarios para este issue', icon: 'warning' });
            return of(loadCommentsFail({ error }));
          }

          ),
        );
    }),
  ));
}
