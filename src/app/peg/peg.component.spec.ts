import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegComponent } from './peg.component';

describe('PegComponent', () => {
  let component: PegComponent;
  let fixture: ComponentFixture<PegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
