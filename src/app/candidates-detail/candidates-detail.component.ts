import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanditatesDetailService } from '../canditates-detail.service';

@Component({
  selector: 'app-candidates-detail',
  templateUrl: './candidates-detail.component.html',
  styleUrls: ['./candidates-detail.component.css']
})
export class CandidatesDetailComponent implements OnInit  {

  candidates:any=[];
  
  private baseURL = "http://localhost:5000/candidates";

  constructor(private http : HttpClient, private candidateService : CanditatesDetailService) { }

  ngOnInit(): void {
    
    this.candidates = this.candidateService.getCandidate().subscribe(
      (data) => { 
        this.candidates = data;
      }
    )      
  }

}

