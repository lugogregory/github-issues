import {
    ActionReducerMap,
    createFeatureSelector,
    MetaReducer
} from '@ngrx/store';

import { environment } from 'src/environments/environment';

import { IssuesModuleState, CommentsModuleState } from '../states';
import { reducer} from './issues.reducer';
import { reducerComments } from './issues.reducer';
import { reducerUI, reducerUIComments } from './issues-ui-reducer';


export const reducersIssues: ActionReducerMap<IssuesModuleState> = {
    issues: reducer,
    issuesUI: reducerUI,
};

export const reducersComments: ActionReducerMap<CommentsModuleState> = {
    comments: reducerComments,
    commentsUI: reducerUIComments
};

export const metaReducersIssues: MetaReducer<IssuesModuleState>[] = !environment.production ? [] : [];
export const metaReducersComments: MetaReducer<CommentsModuleState>[] = !environment.production ? [] : [];

export const getIssuesModuleState = createFeatureSelector<IssuesModuleState>(
    'issues-module'
);

export const getCommentsModuleState = createFeatureSelector<CommentsModuleState>(
    'comments-module'
);
