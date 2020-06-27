import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Modulos
import { MaterialModule } from '../../material.module';
import { TranslateModule } from '@ngx-translate/core';

// Componentes
import { HomeComponent } from './home/home.component';
import { DetailIssueComponent } from './detail-issue/detail-issue.component';


@NgModule({
  declarations: [HomeComponent, DetailIssueComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    TranslateModule
  ],
  exports: [
    HomeComponent,
    DetailIssueComponent
  ]
})
export class PagesModule { }
