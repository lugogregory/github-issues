import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, mergeMap, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';



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
    private issuesService: IssuesService,
    private toastrService: ToastrService
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
            this.toastrService.warning(
              'URL de repositorio no existe o no tiene issues, debe tener éste formato: https://github.com/USUARIO/REPO',
              'Atención',
            );
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
            this.toastrService.warning(
              'No existen comentarios para este issue',
              'Atención'
            );
            return of(loadCommentsFail({ error }));
          }

          ),
        );
    }),
  ));
}
