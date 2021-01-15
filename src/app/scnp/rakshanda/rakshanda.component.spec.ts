import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RakshandaComponent } from './rakshanda.component';

describe('RakshandaComponent', () => {
  let component: RakshandaComponent;
  let fixture: ComponentFixture<RakshandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RakshandaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RakshandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
