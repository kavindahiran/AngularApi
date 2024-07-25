import { Component,OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styles: ``
})
export class StudentRegistrationComponent implements OnInit {
constructor(public service:StudentService){

}

  ngOnInit(): void {
    this.service.ReloadData();
  }

}
