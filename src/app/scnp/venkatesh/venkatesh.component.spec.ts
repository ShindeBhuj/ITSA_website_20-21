import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenkateshComponent } from './venkatesh.component';

describe('VenkateshComponent', () => {
  let component: VenkateshComponent;
  let fixture: ComponentFixture<VenkateshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenkateshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenkateshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
