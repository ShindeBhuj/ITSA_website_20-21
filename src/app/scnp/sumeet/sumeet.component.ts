import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-sumeet',
  templateUrl: './sumeet.component.html',
  styleUrls: ['./sumeet.component.css']
})
export class SumeetComponent implements OnInit {
  display = List.find(x=>x.id==3);

  constructor() { }

  ngOnInit() {
  }

}
