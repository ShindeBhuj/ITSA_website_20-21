import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TejashreeComponent } from './tejashree.component';

describe('TejashreeComponent', () => {
  let component: TejashreeComponent;
  let fixture: ComponentFixture<TejashreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TejashreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TejashreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
