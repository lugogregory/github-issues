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
                // case 'completed':
                //     return todos.filter(t => t.completed);
            }
        }
        return comments;
    }
);

// export const getIssue = createSelector(
//     getEntitiesIssues,
//     getRouterState,
//     (entities, router) => {
//         if (router?.state?.params) {
//             const id = router.state.params.id;
//             return entities[id];
//         }
//         return null;
//     }
// );

// export const getCountVisibleIssues = createSelector(
//     getVisibleIssues,
//     (issues) => issues.length
// );


// export const getFilter = createSelector(
//     getRouterState,
//     (router) => {
//         if (router.state && router.state.params.filter) {
//             const filter = router.state.params.filter;
//             switch (filter) {
//                 default:
//                     return 'all';
//                 // case 'completed':
//                 //     return 'completed';
//                 // case 'active':
//                 //     return 'active';
//             }
//         }
//         return 'all';
//     }
// );
