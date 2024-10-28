import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerificationUiComponent } from './email-verification-ui.component';

describe('EmailVerificationUiComponent', () => {
  let component: EmailVerificationUiComponent;
  let fixture: ComponentFixture<EmailVerificationUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailVerificationUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailVerificationUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
