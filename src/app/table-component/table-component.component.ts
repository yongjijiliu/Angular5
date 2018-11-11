import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  constructor(private routeInfo: ActivatedRoute) { }
  private TableRowNum: number;
  ngOnInit() {
    //参数快照
    //this.TableRowNum = this.routeInfo.snapshot.queryParams['id'];
    //this.TableRowNum = this.routeInfo.snapshot.params['id'];


    //参数订阅
    this.routeInfo.params.subscribe((params: Params) => this.TableRowNum = params['id']);

  }

}
