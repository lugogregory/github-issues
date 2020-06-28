import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { DetailIssueComponent } from './issues/detail-issue/detail-issue.component';
import { TotalIssuesComponent } from './issues/total-issues/total-issues.component';

const routes: Routes = [
  { path: '', redirectTo: '/total-issues', pathMatch: 'full'},
  { path: 'total-issues', component: TotalIssuesComponent},
  { path: 'detail-issue', component: DetailIssueComponent},
  { path: '**', redirectTo: '/total-issues', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
