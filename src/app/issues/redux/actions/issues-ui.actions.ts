import { createAction, props } from '@ngrx/store';

// ISSUES
export const loadIssuesRequest = createAction(
  '[IssuesModule] LoadIssuesRequest',
  props<{ repoUrl: string }>()
);

export const loadIssuesSuccess = createAction(
  '[IssuesModule] LoadIssuesSuccess'
);

export const loadIssuesFail = createAction(
  '[IssuesModule] LoadIssuesFail',
  props<{ error: string }>()
);

// COMMENTS
export const loadCommentsRequest = createAction(
  '[IssuesModule] LoadCommentsRequest',
  props<{ issueUrl: string }>()
);

export const loadCommentsSuccess = createAction(
  '[IssuesModule] LoadCommentsSuccess'
);

export const loadCommentsFail = createAction(
  '[IssuesModule] LoadCommentsFail',
  props<{ error: string }>()
);

