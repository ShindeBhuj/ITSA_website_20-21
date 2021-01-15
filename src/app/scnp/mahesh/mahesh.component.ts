import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-mahesh',
  templateUrl: './mahesh.component.html',
  styleUrls: ['./mahesh.component.css']
})
export class MaheshComponent implements OnInit {
  display = List.find(x=>x.id==2);

  constructor() { }

  ngOnInit() {
  }

}
