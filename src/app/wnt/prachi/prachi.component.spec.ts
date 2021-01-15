import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrachiComponent } from './prachi.component';

describe('PrachiComponent', () => {
  let component: PrachiComponent;
  let fixture: ComponentFixture<PrachiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrachiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrachiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
