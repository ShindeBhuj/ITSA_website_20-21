import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanjanaComponent } from './sanjana.component';

describe('SanjanaComponent', () => {
  let component: SanjanaComponent;
  let fixture: ComponentFixture<SanjanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanjanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanjanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
