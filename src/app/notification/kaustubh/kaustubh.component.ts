import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-kaustubh',
  templateUrl: './kaustubh.component.html',
  styleUrls: ['./kaustubh.component.css']
})
export class KaustubhComponent implements OnInit {
  display = List.find(x=>x.id==4);

  constructor() { }

  ngOnInit() {
  }

}
