import { createReducer, on, Action } from '@ngrx/store';
import * as IssuesActions from '../actions';
import { IssuesState, issuesAdapter, commentsAdapter, CommentsState } from '../states';

export const initialState: IssuesState = issuesAdapter.getInitialState({
  // additional entity state properties
});

export const initialStateComments: CommentsState = commentsAdapter.getInitialState({
  // additional entity state properties
});

const issuesReducer = createReducer(
  initialState,
  on(IssuesActions.loadIssues, (state, { issues }) => {
    return issuesAdapter.setAll(issues, state);
  }),
);

const commentsReducer = createReducer(
  initialStateComments,
  on(IssuesActions.loadComments, (state, { comments }) => {
    return commentsAdapter.setAll(comments, state);
  })
);

export function reducer(state: IssuesState | undefined, action: Action) {
  return issuesReducer(state, action);
}

export function reducerComments(state: CommentsState | undefined, action: Action) {
  return commentsReducer(state, action);
}
