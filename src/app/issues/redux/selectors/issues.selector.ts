import { createSelector } from '@ngrx/store';

import { getIssuesModuleState } from '../reducers/index';
import { issuesAdapter } from '../states/issues.state';
import { getRouterState } from '../../../reducers/index';

export const geIssuesState = createSelector(
    getIssuesModuleState,
    state => state.issues
);

export const {
    selectAll: getAllIssues,
    selectTotal: getCountAllIssues,
    selectEntities: getEntitiesIssues
} = issuesAdapter.getSelectors(geIssuesState);

export const getVisibleIssues = createSelector(
    getAllIssues,
    getRouterState,
    (issues, router) => {
        if (router?.state?.params) {
            const filter = router.state.params.filter;
            switch (filter) {
                default:
                    return issues;
            }
        }
        return issues;
    }
);

export const getIssue = createSelector(
    getEntitiesIssues,
    getRouterState,
    (entities, router) => {
        if (router?.state?.params) {
            const id = router.state.params.id;
            return entities[id];
        }
        return null;
    }
);

export const getCountVisibleIssues = createSelector(
    getVisibleIssues,
    (issues) => issues.length
);


export const getFilter = createSelector(
    getRouterState,
    (router) => {
        if (router.state && router.state.params.filter) {
            const filter = router.state.params.filter;
            switch (filter) {
                default:
                     return 'all';
            }
        }
        return 'all';
    }
);
