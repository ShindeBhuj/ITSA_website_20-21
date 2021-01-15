import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SakshiComponent } from './sakshi.component';

describe('SakshiComponent', () => {
  let component: SakshiComponent;
  let fixture: ComponentFixture<SakshiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SakshiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SakshiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
