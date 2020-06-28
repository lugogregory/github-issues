import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Issue } from '../models';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-issues',
  templateUrl: './table-issues.component.html',
  styleUrls: ['./table-issues.component.scss']
})
export class TableIssuesComponent implements OnInit {

  displayedColumns: string[] = ['title', 'created_at', 'comments'];
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
  }

  @Output() rowSelect: EventEmitter<Issue> = new EventEmitter();

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  verComentarios(issue) {
    if ( issue?.comments > 0 ) {
      this.rowSelect.emit(issue);
      this.router.navigate(['/detail-issue']);
    } else {
      Swal.fire({ title: 'Atención', text: 'El issue seleccionado no tiene comentarios', icon: 'warning' });
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
