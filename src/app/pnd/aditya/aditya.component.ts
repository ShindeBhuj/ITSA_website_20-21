import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-aditya',
  templateUrl: './aditya.component.html',
  styleUrls: ['./aditya.component.css']
})
export class AdityaComponent implements OnInit {
  display = List.find(x=>x.id==3);

  constructor() { }

  ngOnInit() {
  }

}
