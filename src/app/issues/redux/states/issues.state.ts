import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Issue, Comment } from '../../models';

// tslint:disable-next-line: no-empty-interface
export interface IssuesState extends EntityState<Issue> {}
export const issuesAdapter: EntityAdapter<Issue> = createEntityAdapter<Issue>();

export interface CommentsState extends EntityState<Comment> {}
export const commentsAdapter: EntityAdapter<Comment> = createEntityAdapter<Comment>();
