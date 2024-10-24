import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePasswordComponent } from './choose-password.component';

describe('ChoosePasswordComponent', () => {
  let component: ChoosePasswordComponent;
  let fixture: ComponentFixture<ChoosePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosePasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
