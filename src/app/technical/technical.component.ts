import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.css']
})
export class TechnicalComponent implements OnInit {
  modalRef: NgbModalRef;
  requirement :any={};
  constructor() { }

  ngOnInit() {
  }
  
}
