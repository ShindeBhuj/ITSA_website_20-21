import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiddhiComponent } from './siddhi.component';

describe('SiddhiComponent', () => {
  let component: SiddhiComponent;
  let fixture: ComponentFixture<SiddhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiddhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiddhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
