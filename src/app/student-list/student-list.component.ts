import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  template: `
  <h2>Students List</h2>
    <ul *ngFor="let x of students">
      <li>{{x.name}}</li>
    </ul>
  `,
  styles: []
})
export class StudentListComponent implements OnInit {

  public students:any =[]
  constructor(private _studentService:StudentService) { }

  ngOnInit(){
    this._studentService.getStudents().subscribe(data => this.students=data);
  }
}
