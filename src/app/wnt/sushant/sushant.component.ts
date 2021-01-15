import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-sushant',
  templateUrl: './sushant.component.html',
  styleUrls: ['./sushant.component.css']
})
export class SushantComponent implements OnInit {
  display = List.find(x=>x.id==7);

  constructor() { }

  ngOnInit() {
  }

}
