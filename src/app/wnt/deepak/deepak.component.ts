import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-deepak',
  templateUrl: './deepak.component.html',
  styleUrls: ['./deepak.component.css']
})
export class DeepakComponent implements OnInit {
  display = List.find(x=>x.id==5);

  constructor() { }

  ngOnInit() {
  }

}
