import { createSelector } from '@ngrx/store';

import { getCommentsModuleState } from '../reducers/index';
import { commentsAdapter } from '../states/issues.state';
import { getRouterState } from '../../../reducers/index';

export const geCommentsState = createSelector(
    getCommentsModuleState,
    state => state.comments
);

export const {
    selectAll: getAllComments,
    selectTotal: getCountAllComments,
    selectEntities: getEntitiesComments
} = commentsAdapter.getSelectors(geCommentsState);

export const getVisibleComments = createSelector(
    getAllComments,
    getRouterState,
    (comments, router) => {
        if (router?.state?.params) {
            const filter = router.state.params.filter;
            switch (filter) {
                default:
                    return comments;
            }
        }
        return comments;
    }
);
