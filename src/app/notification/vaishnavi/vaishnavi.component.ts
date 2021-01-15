import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-vaishnavi',
  templateUrl: './vaishnavi.component.html',
  styleUrls: ['./vaishnavi.component.css']
})
export class VaishnaviComponent implements OnInit {
  display = List.find(x=>x.id==5);

  constructor() { }

  ngOnInit() {
  }

}
