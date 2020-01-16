import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-file-reader-to-upload',
  templateUrl: './file-reader-to-upload.component.html',
  styleUrls: ['./file-reader-to-upload.component.css']
})
export class FileReaderToUploadComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  formData = new FormData();
  previewUrl;
  uploadedFilePath;
  fileData;
  onUpload(fileInput:any){
    this.fileData = fileInput.target.files[0]
    this.formData.append("filetoupload",this.fileData);
    let reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = ()=>{
      this.previewUrl = reader.result;
    }
  }
  onSubmit(){

    this.http.post("http://localhost:8081/upload/file",this.formData)
      .subscribe(res=>{
        console.log(res);
        this.uploadedFilePath = "http://localhost:8081/download/file/"+ res["id"];
        alert("SUCCESS");
      },err=>{
        console.log(err);
      });
  }

}
