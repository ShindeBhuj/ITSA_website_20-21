import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItsaHomeComponent } from './itsa-home.component';

describe('ItsaHomeComponent', () => {
  let component: ItsaHomeComponent;
  let fixture: ComponentFixture<ItsaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItsaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItsaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
