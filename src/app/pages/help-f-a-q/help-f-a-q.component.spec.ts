import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpFAQComponent } from './help-f-a-q.component';

describe('HelpFAQComponent', () => {
  let component: HelpFAQComponent;
  let fixture: ComponentFixture<HelpFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpFAQComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
