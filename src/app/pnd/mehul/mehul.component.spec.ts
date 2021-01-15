import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MehulComponent } from './mehul.component';

describe('MehulComponent', () => {
  let component: MehulComponent;
  let fixture: ComponentFixture<MehulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MehulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MehulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
