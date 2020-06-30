import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Issue } from '../models';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-table-issues',
  templateUrl: './table-issues.component.html',
  styleUrls: ['./table-issues.component.scss']
})
export class TableIssuesComponent implements OnInit {

  displayedColumns: string[] = ['state', 'id', 'title', 'user', 'created_at', 'comments'];
  dataSource: MatTableDataSource<Issue>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // tslint:disable-next-line: variable-name
  issues: Issue[];

  @Input()
  set issue(issue: Issue[]) {
    this.issues = issue;
    this.dataSource = new MatTableDataSource(issue);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(issue);
  }

  @Output() rowSelect: EventEmitter<Issue> = new EventEmitter();

  constructor(
    public router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  verComentarios(issue) {
    if ( issue?.comments > 0 ) {
      this.rowSelect.emit(issue);
      this.router.navigate(['/detail-issue']);
    } else {
      this.toastrService.warning(
        'El issue seleccionado no tiene comentarios',
        'Atención'
      );
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
