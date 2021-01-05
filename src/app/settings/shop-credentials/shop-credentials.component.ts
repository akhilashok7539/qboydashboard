import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-shop-credentials',
  templateUrl: './shop-credentials.component.html',
  styleUrls: ['./shop-credentials.component.css']
})
export class ShopCredentialsComponent implements OnInit {

  displayedColumns = ['slno', 'sname', 'emailusername','action'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit() {
  }


}