import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { StudentsService } from '../students.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

 students:any;

  constructor(private _studentsService:StudentsService,private router: Router) { }

  ngOnInit() {
   this._studentsService.getStudents().subscribe((data) => this.students=data);
  }

  onSubmit(data:any)
  {
    this._studentsService.postStudents(data).subscribe((data) => console.log(data));
    location.reload();

  }


}
