import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GautamiComponent } from './gautami.component';

describe('GautamiComponent', () => {
  let component: GautamiComponent;
  let fixture: ComponentFixture<GautamiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GautamiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GautamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
