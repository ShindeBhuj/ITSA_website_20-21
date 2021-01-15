import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-ashay',
  templateUrl: './ashay.component.html',
  styleUrls: ['./ashay.component.css']
})
export class AshayComponent implements OnInit {
  display = List.find(x=>x.id==5);

  constructor() { }

  ngOnInit() {
  }

}
