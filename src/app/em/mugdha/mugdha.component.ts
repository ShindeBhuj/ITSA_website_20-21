import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-mugdha',
  templateUrl: './mugdha.component.html',
  styleUrls: ['./mugdha.component.css']
})
export class MugdhaComponent implements OnInit {
  display = List.find(x=>x.id==4);

  constructor() { }

  ngOnInit() {
  }

}
