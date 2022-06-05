import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveningTripComponent } from './evening-trip.component';

describe('EveningTripComponent', () => {
  let component: EveningTripComponent;
  let fixture: ComponentFixture<EveningTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EveningTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EveningTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
