import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-sayli',
  templateUrl: './sayli.component.html',
  styleUrls: ['./sayli.component.css']
})
export class SayliComponent implements OnInit {
  display = List.find(x=>x.id==2);

  constructor() { }

  ngOnInit() {
  }

}
