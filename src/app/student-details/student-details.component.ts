import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  template: `
  <h2>Students Details</h2>
    <ul *ngFor="let x of students">
      <li>{{x.id}}-{{x.name}}-{{x.courses}}</li>
    </ul>
  `,
  styles: [
  ]
})
export class StudentDetailsComponent implements OnInit {

  public students:any =[]
  constructor(private _studentService:StudentService) { }

  ngOnInit(){
    this._studentService.getStudents().subscribe(data => this.students=data);
  }
}
