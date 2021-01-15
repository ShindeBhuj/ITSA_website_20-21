import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-ajay',
  templateUrl: './ajay.component.html',
  styleUrls: ['./ajay.component.css']
})
export class AjayComponent implements OnInit {
  display = List.find(x=>x.id==4);

  constructor() { }

  ngOnInit() {
  }

}
