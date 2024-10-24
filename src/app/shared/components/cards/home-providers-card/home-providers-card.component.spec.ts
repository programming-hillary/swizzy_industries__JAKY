import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProvidersCardComponent } from './home-providers-card.component';

describe('HomeProvidersCardComponent', () => {
  let component: HomeProvidersCardComponent;
  let fixture: ComponentFixture<HomeProvidersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProvidersCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProvidersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
