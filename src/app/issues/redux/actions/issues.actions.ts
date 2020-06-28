import { createAction, props } from '@ngrx/store';
// import { Update } from '@ngrx/entity';
import { Issue, Comment } from '../../models';

export const loadIssues = createAction(
  '[IssuesModule] LoadIssues',
  props<{issues: Issue[]}>()
);

export const loadComments = createAction(
    '[IssuesModule] LoadComments',
    props<{comments: Comment[]}>()
  );
