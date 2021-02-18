import { Component, OnInit } from '@angular/core';
import {ListService} from '../list.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private listserv : ListService) { }
  datas : any;

  ngOnInit(): void {
    this.listserv.listUser().subscribe(res => this.datas = res);
  }

}
