import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-priya',
  templateUrl: './priya.component.html',
  styleUrls: ['./priya.component.css']
})
export class PriyaComponent implements OnInit {
  display = List.find(x=>x.id==11);

  constructor() { }

  ngOnInit() {
  }

}
