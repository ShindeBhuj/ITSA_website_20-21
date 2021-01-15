import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshutoshComponent } from './ashutosh.component';

describe('AshutoshComponent', () => {
  let component: AshutoshComponent;
  let fixture: ComponentFixture<AshutoshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshutoshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshutoshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
