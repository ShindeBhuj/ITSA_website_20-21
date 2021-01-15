import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-vedant',
  templateUrl: './vedant.component.html',
  styleUrls: ['./vedant.component.css']
})
export class VedantComponent implements OnInit {
  display = List.find(x=>x.id==2);

  constructor() { }

  ngOnInit() {
  }

}
