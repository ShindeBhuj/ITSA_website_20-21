import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-shreyam',
  templateUrl: './shreyam.component.html',
  styleUrls: ['./shreyam.component.css']
})
export class ShreyamComponent implements OnInit {
  display = List.find(x=>x.id==8);

  constructor() { }

  ngOnInit() {
  }

}
