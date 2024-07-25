import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { environment } from '../../environments/environment.development';
import { Student } from './student.model';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
url : string=environment.baseUrl + 'Students'
StudentList:  Student[]=[];
FormData: Student= new Student;

  constructor(private http:HttpClient) { }

  // ReloadData(){
  //   this.http.get(this.url)
  //   .subscribe({
  //     next:res=>{
  //       console.log(res)
  //       this.StudentList=res as Student[];
  //     },
  //     error:err=>{console.log(err)}
  //   })
  // }

  ReloadData(){
    this.http.get<Student[]>(this.url)
    .subscribe({
        next: res => {
          debugger;
            this.StudentList = res.map(student => {
              debugger;
                return {
                    ...student,
                    courseName: student.course ? student.course.courseName : ''
                };
            });
            console.log(this.StudentList);
        },
        error: err => {
            console.log(err);
        }
    });
  }

 PostStudent(){
  return this.http.post(this.url, this.FormData)
 }
}
