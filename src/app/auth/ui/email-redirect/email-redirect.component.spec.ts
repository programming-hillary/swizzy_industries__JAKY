import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailRedirectComponent } from './email-redirect.component';

describe('EmailRedirectComponent', () => {
  let component: EmailRedirectComponent;
  let fixture: ComponentFixture<EmailRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailRedirectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
