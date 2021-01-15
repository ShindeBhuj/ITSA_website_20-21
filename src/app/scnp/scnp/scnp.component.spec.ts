import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScnpComponent } from './scnp.component';

describe('ScnpComponent', () => {
  let component: ScnpComponent;
  let fixture: ComponentFixture<ScnpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScnpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScnpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
