import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayliComponent } from './sayli.component';

describe('SayliComponent', () => {
  let component: SayliComponent;
  let fixture: ComponentFixture<SayliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
