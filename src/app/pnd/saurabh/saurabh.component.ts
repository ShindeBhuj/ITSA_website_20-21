import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-saurabh',
  templateUrl: './saurabh.component.html',
  styleUrls: ['./saurabh.component.css']
})
export class SaurabhComponent implements OnInit {
  display = List.find(x=>x.id==2);

  constructor() { }

  ngOnInit() {
  }

}
