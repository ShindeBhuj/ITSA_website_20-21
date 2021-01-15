import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-sharayu',
  templateUrl: './sharayu.component.html',
  styleUrls: ['./sharayu.component.css']
})
export class SharayuComponent implements OnInit {
  display = List.find(x=>x.id==6);

  constructor() { }

  ngOnInit() {
  }

}
