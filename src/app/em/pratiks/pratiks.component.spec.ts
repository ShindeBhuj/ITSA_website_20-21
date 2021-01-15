import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratiksComponent } from './pratiks.component';

describe('PratiksComponent', () => {
  let component: PratiksComponent;
  let fixture: ComponentFixture<PratiksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratiksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratiksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
