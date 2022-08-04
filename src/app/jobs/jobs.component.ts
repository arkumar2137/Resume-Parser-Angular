import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CanditatesDetailService } from '../canditates-detail.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  elements:any = [];
  profileForm:any = FormGroup;

  name: string = '';
  files: any;
  pdfFile: any;
  result: any;

  getTheInput(name: string){
    this.name = name;
  }

  getTheFile(event: any){
    this.files = event.target.files[0];
    console.log('file', this.files);
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }

  onSubmit(){
    console.log('button pressed');
    let formData = new FormData();
    formData.set("name", this.name);
    formData.set("jd_file", this.files);

    this.http.post('http://localhost:5000/uploads_jd', formData).subscribe(
      resp => {
        this.elements = resp;
        console.log(this.elements)
      }
    )
  }

}
