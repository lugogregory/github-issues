import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Modulos
import { MaterialModule } from '../material.module';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Componentes
import { TotalIssuesComponent } from './total-issues/total-issues.component';
import { DetailIssueComponent } from './detail-issue/detail-issue.component';
import { TableIssuesComponent } from './table-issues/table-issues.component';

// Servicios
import { IssuesService } from './services/issues.service';

// Redux
import * as fromReducers from './redux/reducers';
import * as fromEffects from './redux/effects';

// Router
import { AppRoutingModule } from '../app-routing.module';
import { TableCommentsComponent } from './table-comments/table-comments.component';

// Toastr
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [TotalIssuesComponent, DetailIssueComponent, TableIssuesComponent, TableCommentsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    MaterialModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-full-width',
    }),
    TranslateModule,
    StoreModule.forFeature('issues-module', fromReducers.reducersIssues, {
      metaReducers: fromReducers.metaReducersIssues
    }),
    StoreModule.forFeature('comments-module', fromReducers.reducersComments, {
      metaReducers: fromReducers.metaReducersComments
    }),
    EffectsModule.forFeature(fromEffects.EFFECTS)
  ],
  providers: [IssuesService],
  exports: [
    TotalIssuesComponent,
    DetailIssueComponent
  ]
})
export class IssuesModule { }
