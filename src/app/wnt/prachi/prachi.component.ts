import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-prachi',
  templateUrl: './prachi.component.html',
  styleUrls: ['./prachi.component.css']
})
export class PrachiComponent implements OnInit {
  display = List.find(x=>x.id==3);

  constructor() { }

  ngOnInit() {
  }

}
