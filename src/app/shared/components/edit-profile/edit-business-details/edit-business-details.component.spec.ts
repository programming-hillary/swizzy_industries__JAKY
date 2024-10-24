import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBusinessDetailsComponent } from './edit-business-details.component';

describe('EditBusinessDetailsComponent', () => {
  let component: EditBusinessDetailsComponent;
  let fixture: ComponentFixture<EditBusinessDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBusinessDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBusinessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
