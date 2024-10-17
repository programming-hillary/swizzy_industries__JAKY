import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadBusinessTaskComponent } from './upload-business-task.component';

describe('UploadBusinessTaskComponent', () => {
  let component: UploadBusinessTaskComponent;
  let fixture: ComponentFixture<UploadBusinessTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadBusinessTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadBusinessTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
