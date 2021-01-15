import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaustubhComponent } from './kaustubh.component';

describe('KaustubhComponent', () => {
  let component: KaustubhComponent;
  let fixture: ComponentFixture<KaustubhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaustubhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaustubhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
