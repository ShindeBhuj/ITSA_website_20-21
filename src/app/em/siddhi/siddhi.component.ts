import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-siddhi',
  templateUrl: './siddhi.component.html',
  styleUrls: ['./siddhi.component.css']
})
export class SiddhiComponent implements OnInit {
  display = List.find(x=>x.id==7);

  constructor() { }

  ngOnInit() {
  }

}
