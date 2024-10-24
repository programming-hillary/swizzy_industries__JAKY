import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerBookingComponent } from './banner-booking.component';

describe('BannerBookingComponent', () => {
  let component: BannerBookingComponent;
  let fixture: ComponentFixture<BannerBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
