import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-aniket',
  templateUrl: './aniket.component.html',
  styleUrls: ['./aniket.component.css']
})
export class AniketComponent implements OnInit {
  display = List.find(x=>x.id==3);

  constructor() { }

  ngOnInit() {
  }

}
