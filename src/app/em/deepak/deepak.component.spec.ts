import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepakComponent } from './deepak.component';

describe('DeepakComponent', () => {
  let component: DeepakComponent;
  let fixture: ComponentFixture<DeepakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
