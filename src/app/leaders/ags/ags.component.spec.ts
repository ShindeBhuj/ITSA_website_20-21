import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AGSComponent } from './ags.component';

describe('AGSComponent', () => {
  let component: AGSComponent;
  let fixture: ComponentFixture<AGSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AGSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AGSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
