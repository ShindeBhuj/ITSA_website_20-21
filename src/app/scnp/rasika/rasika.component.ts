import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-rasika',
  templateUrl: './rasika.component.html',
  styleUrls: ['./rasika.component.css']
})
export class RasikaComponent implements OnInit {
  display = List.find(x=>x.id==6);

  constructor() { }

  ngOnInit() {
  }

}
