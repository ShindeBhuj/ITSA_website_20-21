import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-ags',
  templateUrl: './ags.component.html',
  styleUrls: ['./ags.component.css']
})
export class AGSComponent implements OnInit {
  display = List.find(x=>x.id==2);

  constructor() { }

  ngOnInit() {
  }

}
