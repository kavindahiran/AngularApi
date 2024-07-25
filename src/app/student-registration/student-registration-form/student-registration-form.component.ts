import { Component } from '@angular/core';
import { StudentService } from '../../shared/student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-registration-form',
  templateUrl: './student-registration-form.component.html',
  styles: ``
})
export class StudentRegistrationFormComponent {
  constructor(public service:StudentService ){

  }
onSubmit(formData: NgForm) {
  debugger;
  if(this.service.FormData.id==0){
    this.SaveStudent(formData);
  }else{

  }
}

SaveStudent(formData: NgForm){
  this.service.PostStudent()
  .subscribe({
    next:res=>{
      console.log(res);
      this.service.ReloadData();
    },
    error:err=>{
      console.log(err)
    }
  })
}
UpdateStudent(formData: NgForm){

}

}
