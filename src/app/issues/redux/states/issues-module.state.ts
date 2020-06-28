import { IssuesState, CommentsState } from './issues.state';
import { IssuesUIState, CommentsUIState } from './issues-ui.state';

export interface IssuesModuleState {
  issues: IssuesState;
  issuesUI: IssuesUIState;
}

export interface CommentsModuleState {
  comments: CommentsState;
  commentsUI: CommentsUIState;
}
