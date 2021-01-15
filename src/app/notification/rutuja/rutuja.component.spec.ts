import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutujaComponent } from './rutuja.component';

describe('RutujaComponent', () => {
  let component: RutujaComponent;
  let fixture: ComponentFixture<RutujaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutujaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutujaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
