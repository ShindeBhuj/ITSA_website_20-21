import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PndComponent } from './pnd.component';

describe('PndComponent', () => {
  let component: PndComponent;
  let fixture: ComponentFixture<PndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
