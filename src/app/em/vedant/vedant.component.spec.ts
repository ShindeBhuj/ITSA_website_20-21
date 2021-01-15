import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VedantComponent } from './vedant.component';

describe('VedantComponent', () => {
  let component: VedantComponent;
  let fixture: ComponentFixture<VedantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VedantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VedantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
