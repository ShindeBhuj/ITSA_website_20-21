import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaswatComponent } from './shaswat.component';

describe('ShaswatComponent', () => {
  let component: ShaswatComponent;
  let fixture: ComponentFixture<ShaswatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShaswatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShaswatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
