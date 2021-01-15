import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-raj',
  templateUrl: './raj.component.html',
  styleUrls: ['./raj.component.css']
})
export class RajComponent implements OnInit {
  display = List.find(x=>x.id==1);

  constructor() { }

  ngOnInit() {
  }

}
