import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharayuComponent } from './sharayu.component';

describe('SharayuComponent', () => {
  let component: SharayuComponent;
  let fixture: ComponentFixture<SharayuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharayuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharayuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
