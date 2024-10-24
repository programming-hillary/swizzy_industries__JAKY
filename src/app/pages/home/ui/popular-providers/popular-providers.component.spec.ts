import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularProvidersComponent } from './popular-providers.component';

describe('PopularProvidersComponent', () => {
  let component: PopularProvidersComponent;
  let fixture: ComponentFixture<PopularProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularProvidersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
