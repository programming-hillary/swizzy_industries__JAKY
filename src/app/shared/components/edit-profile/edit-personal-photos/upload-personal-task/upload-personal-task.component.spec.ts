import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadPersonalTaskComponent } from './upload-personal-task.component';


describe('UploadPersonalTaskComponent', () => {
  let component: UploadPersonalTaskComponent;
  let fixture: ComponentFixture<UploadPersonalTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadPersonalTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPersonalTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
