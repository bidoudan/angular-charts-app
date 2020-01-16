import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileReaderToUploadComponent } from './file-reader-to-upload.component';

describe('FileReaderToUploadComponent', () => {
  let component: FileReaderToUploadComponent;
  let fixture: ComponentFixture<FileReaderToUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileReaderToUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileReaderToUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
