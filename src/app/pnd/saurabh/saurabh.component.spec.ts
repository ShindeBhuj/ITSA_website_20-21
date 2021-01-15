import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaurabhComponent } from './saurabh.component';

describe('SaurabhComponent', () => {
  let component: SaurabhComponent;
  let fixture: ComponentFixture<SaurabhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaurabhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaurabhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
