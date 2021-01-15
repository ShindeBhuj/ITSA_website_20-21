import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuiComponent } from './jui.component';

describe('JuiComponent', () => {
  let component: JuiComponent;
  let fixture: ComponentFixture<JuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
