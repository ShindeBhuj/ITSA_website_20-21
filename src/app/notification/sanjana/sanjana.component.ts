import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-sanjana',
  templateUrl: './sanjana.component.html',
  styleUrls: ['./sanjana.component.css']
})
export class SanjanaComponent implements OnInit {
  display = List.find(x=>x.id==1);

  constructor() { }

  ngOnInit() {
  }

}
