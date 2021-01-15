import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaushalComponent } from './kaushal.component';

describe('KaushalComponent', () => {
  let component: KaushalComponent;
  let fixture: ComponentFixture<KaushalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaushalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaushalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
