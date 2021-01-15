import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-ashutosh',
  templateUrl: './ashutosh.component.html',
  styleUrls: ['./ashutosh.component.css']
})
export class AshutoshComponent implements OnInit {
  display = List.find(x=>x.id==8);

  constructor() { }

  ngOnInit() {
  }

}
