import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-vishal',
  templateUrl: './vishal.component.html',
  styleUrls: ['./vishal.component.css']
})
export class VishalComponent implements OnInit {
  display = List.find(x=>x.id==4);

  constructor() { }

  ngOnInit() {
  }

}
