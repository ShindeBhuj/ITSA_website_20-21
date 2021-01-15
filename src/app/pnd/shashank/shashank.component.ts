import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-shashank',
  templateUrl: './shashank.component.html',
  styleUrls: ['./shashank.component.css']
})
export class ShashankComponent implements OnInit {
  display = List.find(x=>x.id==1);

  constructor() { }

  ngOnInit() {
  }

}
