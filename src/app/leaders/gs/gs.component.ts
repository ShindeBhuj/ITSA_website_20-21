import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-gs',
  templateUrl: './gs.component.html',
  styleUrls: ['./gs.component.css']
})
export class GSComponent implements OnInit {
  display = List.find(x=>x.id==1);

  constructor() { }

  ngOnInit() {
  }

}
