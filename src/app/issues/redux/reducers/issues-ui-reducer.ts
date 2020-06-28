import { createReducer, on, Action } from '@ngrx/store';
import * as IssuesUIActions from '../actions';
import { IssuesUIState, CommentsUIState } from '../states/issues-ui.state';


export const initialStateIssues: IssuesUIState = {
  loadingIssues: false,
  errorLoadingIssues: null,
};

export const initialStateComments: CommentsUIState = {
  loadingComments: false,
  errorLoadingComments: null,
};

const issuesUIReducer = createReducer(
  initialStateIssues,
  on(IssuesUIActions.loadIssuesRequest, (state) => {
    return {
      ...state,
      loadingIssues: true,
      errorLoadingIssues: null
    };
  }),
  on(IssuesUIActions.loadIssuesSuccess, (state) => {
    return {
      ...state,
      loadingIssues: false,
      errorLoadingIssues: null
    };
  }),
  on(IssuesUIActions.loadIssuesFail, (state, { error }) => {
    return {
      ...state,
      loadingIssues: false,
      errorLoadingIssues: error || null
    };
  }),
);

const commentsUIReducer = createReducer(
  initialStateComments,
  on(IssuesUIActions.loadCommentsRequest, (state) => {
    return {
      ...state,
      loadingComments: true,
      errorLoadingComments: null
    };
  }),
  on(IssuesUIActions.loadCommentsSuccess, (state) => {
    return {
      ...state,
      loadingComments: false,
      errorLoadingComments: null
    };
  }),
  on(IssuesUIActions.loadCommentsFail, (state, { error }) => {
    return {
      ...state,
      loadingComments: false,
      errorLoadingComments: error || null
    };
  }),
);

export function reducerUI(state: IssuesUIState | undefined, action: Action) {
  return issuesUIReducer(state, action);
}

export function reducerUIComments(state: CommentsUIState | undefined, action: Action) {
  return commentsUIReducer(state, action);
}

