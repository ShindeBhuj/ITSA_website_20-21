import { Component, OnInit } from '@angular/core';
import {Displayinfo} from '../../displayinfo';
import {List} from '../list';

@Component({
  selector: 'app-venkatesh',
  templateUrl: './venkatesh.component.html',
  styleUrls: ['./venkatesh.component.css']
})
export class VenkateshComponent implements OnInit {
  display = List.find(x=>x.id==7);

  constructor() { }

  ngOnInit() {
  }

}
