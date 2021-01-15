import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-shreyak',
  templateUrl: './shreyak.component.html',
  styleUrls: ['./shreyak.component.css']
})
export class ShreyakComponent implements OnInit {
  display = List.find(x=>x.id==10);

  constructor() { }

  ngOnInit() {
  }

}
