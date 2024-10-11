import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilePhotosComponent } from './edit-profile-photos.component';

describe('EditProfilePhotosComponent', () => {
  let component: EditProfilePhotosComponent;
  let fixture: ComponentFixture<EditProfilePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProfilePhotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfilePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
