import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MugdhaComponent } from './mugdha.component';

describe('MugdhaComponent', () => {
  let component: MugdhaComponent;
  let fixture: ComponentFixture<MugdhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MugdhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MugdhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
