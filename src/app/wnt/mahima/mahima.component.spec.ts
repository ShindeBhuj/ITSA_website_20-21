import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MahimaComponent } from './mahima.component';

describe('MahimaComponent', () => {
  let component: MahimaComponent;
  let fixture: ComponentFixture<MahimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
