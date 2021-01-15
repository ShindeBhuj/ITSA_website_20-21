import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
   public p;
  constructor() { }
   technical (){
     this.p="technical";
     
   }
   nontechnical (){
    this.p="nontechnical";
   }
   
  ngOnInit() {
  }
}
