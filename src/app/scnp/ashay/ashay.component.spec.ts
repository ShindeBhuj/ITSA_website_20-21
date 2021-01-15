import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshayComponent } from './ashay.component';

describe('AshayComponent', () => {
  let component: AshayComponent;
  let fixture: ComponentFixture<AshayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
