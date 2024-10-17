import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonalPhotosComponent } from './edit-personal-photos.component';

describe('EditPersonalPhotosComponent', () => {
  let component: EditPersonalPhotosComponent;
  let fixture: ComponentFixture<EditPersonalPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPersonalPhotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPersonalPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
