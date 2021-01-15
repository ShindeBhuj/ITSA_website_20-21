import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaitreyaComponent } from './maitreya.component';

describe('MaitreyaComponent', () => {
  let component: MaitreyaComponent;
  let fixture: ComponentFixture<MaitreyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaitreyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaitreyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
