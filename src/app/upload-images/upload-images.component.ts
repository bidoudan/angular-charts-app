import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../company.service';
import {FileUploader} from 'ng2-file-upload';

const uploadAPI = 'http://localhost:8081/upload/file';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent implements OnInit {

  constructor(private serviceCompany: CompanyService) { }
  files :any;
  public uploader: FileUploader = new FileUploader({ url: uploadAPI, itemAlias: 'filetoupload' });

  ngOnInit() {
    this.loadFiles();

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('FileUpload:uploaded successfully:', item, status, response);
      alert('Your file has been uploaded successfully');
    }
  }

  loadFiles(){
    this.serviceCompany.getAllFiles().subscribe(files=>{
      this.files = files;
      console.log(files)
    },err=>{
      alert("Erreur leur de télechargement des fichiers")
    })
  }

}
