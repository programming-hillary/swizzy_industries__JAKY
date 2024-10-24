import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBusinessPhotosComponent } from './edit-business-photos.component';

describe('EditBusinessPhotosComponent', () => {
  let component: EditBusinessPhotosComponent;
  let fixture: ComponentFixture<EditBusinessPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBusinessPhotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBusinessPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
