import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorningTripComponent } from './morning-trip.component';

describe('MorningTripComponent', () => {
  let component: MorningTripComponent;
  let fixture: ComponentFixture<MorningTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorningTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorningTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
