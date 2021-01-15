import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-kaushal',
  templateUrl: './kaushal.component.html',
  styleUrls: ['./kaushal.component.css']
})
export class KaushalComponent implements OnInit {
  display = List.find(x=>x.id==5);

  constructor() { }

  ngOnInit() {
  }

}
