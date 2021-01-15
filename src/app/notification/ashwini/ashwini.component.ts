import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-ashwini',
  templateUrl: './ashwini.component.html',
  styleUrls: ['./ashwini.component.css']
})
export class AshwiniComponent implements OnInit {
  display = List.find(x=>x.id==8);

  constructor() { }

  ngOnInit() {
  }

}
