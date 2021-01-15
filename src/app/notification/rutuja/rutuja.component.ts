import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-rutuja',
  templateUrl: './rutuja.component.html',
  styleUrls: ['./rutuja.component.css']
})
export class RutujaComponent implements OnInit {
  display = List.find(x=>x.id==7);

  constructor() { }

  ngOnInit() {
  }

}
