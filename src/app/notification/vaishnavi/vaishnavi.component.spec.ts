import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaishnaviComponent } from './vaishnavi.component';

describe('VaishnaviComponent', () => {
  let component: VaishnaviComponent;
  let fixture: ComponentFixture<VaishnaviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaishnaviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaishnaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
