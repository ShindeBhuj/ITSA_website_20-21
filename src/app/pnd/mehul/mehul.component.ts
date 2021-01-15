import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-mehul',
  templateUrl: './mehul.component.html',
  styleUrls: ['./mehul.component.css']
})
export class MehulComponent implements OnInit {
  display = List.find(x=>x.id==6);

  constructor() { }

  ngOnInit() {
  }

}
