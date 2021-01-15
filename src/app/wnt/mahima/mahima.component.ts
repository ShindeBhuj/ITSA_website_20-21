import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-mahima',
  templateUrl: './mahima.component.html',
  styleUrls: ['./mahima.component.css']
})
export class MahimaComponent implements OnInit {
  display = List.find(x=>x.id==6);

  constructor() { }

  ngOnInit() {
  }

}
