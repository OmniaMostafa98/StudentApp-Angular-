import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent } from './students';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  getStudents():Observable<IStudent[]>{
    return this.http.get<IStudent[]>("http://localhost:3000/students")
  }
  getSpecificStudent(id:number):Observable<IStudent[]>{
    return this.http.get<IStudent[]>("http://localhost:3000/students/"+id)
  }

  postStudents(_data:any){
    return this.http.post("http://localhost:3000/students",_data);
  }

  deleteStudent(id:number)
  {
    return this.http.delete("http://localhost:3000/students/"+id);
  }

  editStudent(id:number,_data:any)
  {
    return this.http.patch("http://localhost:3000/students/"+id,_data);
  }
  
}
