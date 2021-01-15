import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShreyakComponent } from './shreyak.component';

describe('ShreyakComponent', () => {
  let component: ShreyakComponent;
  let fixture: ComponentFixture<ShreyakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShreyakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShreyakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
