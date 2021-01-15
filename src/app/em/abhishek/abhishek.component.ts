import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-abhishek',
  templateUrl: './abhishek.component.html',
  styleUrls: ['./abhishek.component.css']
})
export class AbhishekComponent implements OnInit {
  display = List.find(x=>x.id==3);

  constructor() { }

  ngOnInit() {
  }

}
