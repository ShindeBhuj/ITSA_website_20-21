import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShreyamComponent } from './shreyam.component';

describe('ShreyamComponent', () => {
  let component: ShreyamComponent;
  let fixture: ComponentFixture<ShreyamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShreyamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShreyamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
