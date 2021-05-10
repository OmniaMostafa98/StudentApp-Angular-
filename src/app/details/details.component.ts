import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { StudentsService } from '../students.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:number=NaN;
  student:any;

  constructor(private myActivatedRoute:ActivatedRoute,private _studentsService:StudentsService,private router: Router) { 
   this.id= myActivatedRoute.snapshot.params.id;
  }


  ngOnInit(): void {
    this._studentsService.getSpecificStudent(this.id).subscribe((data) => this.student=data);
  }

  edit(_form:any){
    this._studentsService. editStudent(this.id,_form).subscribe((data) => console.log(data));
    location.reload();

  }

  delete()
  {
    this._studentsService. deleteStudent(this.id).subscribe((data) => console.log(data));
    this.router.navigate(['/']);
  }

}
