import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Comment } from '../models/issue.model';


@Component({
  selector: 'app-table-comments',
  templateUrl: './table-comments.component.html',
  styles: []
})

export class TableCommentsComponent implements OnInit {

  displayedColumns: string[] = ['user', 'body', 'created_at'];
  dataSource: MatTableDataSource<Comment>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // tslint:disable-next-line: variable-name
  comments: Comment[];

  @Input()
  set comment(comment: Comment[]) {
    this.comments = comment;
    this.dataSource = new MatTableDataSource(comment);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
