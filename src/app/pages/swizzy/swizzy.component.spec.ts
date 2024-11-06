import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwizzyComponent } from './swizzy.component';

describe('SwizzyComponent', () => {
  let component: SwizzyComponent;
  let fixture: ComponentFixture<SwizzyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwizzyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwizzyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
