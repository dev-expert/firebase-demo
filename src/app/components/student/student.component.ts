import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  currentStudent: Student;
  constructor(private commonService: CommonService) {
    this.getStudent('student');
    this.currentStudent = new Student();
  }

  ngOnInit() {
  }

  getStudent(collection) {
    this.commonService.getstudent(collection).subscribe(students => {
      this.students = students;
    })
  }

 
}
