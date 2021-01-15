import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-riya',
  templateUrl: './riya.component.html',
  styleUrls: ['./riya.component.css']
})
export class RiyaComponent implements OnInit {
  display = List.find(x=>x.id==9);

  constructor() { }

  ngOnInit() {
  }

}
