import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-tejashree',
  templateUrl: './tejashree.component.html',
  styleUrls: ['./tejashree.component.css']
})
export class TejashreeComponent implements OnInit {
  display = List.find(x=>x.id==5);

  constructor() { }

  ngOnInit() {
  }

}
