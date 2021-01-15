import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-jui',
  templateUrl: './jui.component.html',
  styleUrls: ['./jui.component.css']
})
export class JuiComponent implements OnInit {
  display = List.find(x=>x.id==6);

  constructor() { }

  ngOnInit() {
  }

}
