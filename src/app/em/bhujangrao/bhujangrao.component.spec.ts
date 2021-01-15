import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhujangraoComponent } from './bhujangrao.component';

describe('BhujangraoComponent', () => {
  let component: BhujangraoComponent;
  let fixture: ComponentFixture<BhujangraoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhujangraoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhujangraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
