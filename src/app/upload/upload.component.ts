import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CanditatesDetailService } from '../canditates-detail.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  profileForm:any = FormGroup;

  name: string = '';
  files: any;
  pdfFile: any;
  result: any;

  getName(name: string){
    this.name = name;
  }

  getFile(event: any){
    this.files = event.target.files[0];
    console.log('file', this.files);
  }

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private canditatesDetailService: CanditatesDetailService) { }

  ngOnInit() {
    
  }

  onSubmit(){

    console.log('button pressed');
    let formData = new FormData();
    formData.set("name", this.name);
    formData.set("resume_file", this.files);

    this.http.post('http://localhost:5000/uploads_resume', formData).subscribe(
      resp => {}
    )

    this.goToCandidatesList();

  }

  goToCandidatesList(){
    alert("File Successfully Uploaded")
    this.router.navigate(['/candidates-detail']);
  }

  onRefresh(){
    window.location.reload();
  }

}
