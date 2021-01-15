import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WntComponent } from './wnt.component';

describe('WntComponent', () => {
  let component: WntComponent;
  let fixture: ComponentFixture<WntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
