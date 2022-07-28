import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resume-checker',
  templateUrl: './resume-checker.component.html',
  styleUrls: ['./resume-checker.component.css']
})
export class ResumeCheckerComponent implements OnInit {

  profiles!: Profile[];

  constructor(private http: HttpClient) { }

  faker(){

    this.http.get('http://localhost:5000/faker').subscribe(
      resp => {console.log(resp)}
    );
  }

  ngOnInit(): void {

  this.profiles = [
    {
      "name": "Cristina",
      "email": "cristina@gmail.com",
      "phone": "8123289303",
      "skills": "Java, Angular",
      "qualification": "Btech",
      "score": "B"
    },
    {
      "name": "Sristi",
      "email": "sristi@gmail.com",
      "phone": "7667316796",
      "skills": "Python, AI",
      "qualification": "Mtech",
      "score": "A"
    }
  ];
  }
}
