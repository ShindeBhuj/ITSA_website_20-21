import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-gautami',
  templateUrl: './gautami.component.html',
  styleUrls: ['./gautami.component.css']
})
export class GautamiComponent implements OnInit {
  display = List.find(x=>x.id==9);

  constructor() { }

  ngOnInit() {
  }

}
