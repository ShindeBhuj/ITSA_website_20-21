import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-rakshanda',
  templateUrl: './rakshanda.component.html',
  styleUrls: ['./rakshanda.component.css']
})
export class RakshandaComponent implements OnInit {
  display = List.find(x=>x.id==4);

  constructor() { }

  ngOnInit() {
  }

}
