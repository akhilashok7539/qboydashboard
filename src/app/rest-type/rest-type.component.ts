import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-rest-type',
  templateUrl: './rest-type.component.html',
  styleUrls: ['./rest-type.component.css']
})
export class RestTypeComponent implements OnInit {
  displayedColumns = ['id', 'itemtype', 'action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
