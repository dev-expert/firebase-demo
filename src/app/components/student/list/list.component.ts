import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Student } from "../../../models/student.model";
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @ViewChild('modal', { read: ElementRef }) modal: ElementRef;
  @Input() students: Student[] = [];
  currentStudent: Student;
  constructor(private commonService: CommonService) {
    this.currentStudent = new Student();
  }

  ngOnInit() {
  }

  toggleModal(show) {
    this.modal.nativeElement.className = !!show ? "modal fade in show-popup" : "modal fade";
  }

  add(show) {
    this.currentStudent = new Student();
    this.toggleModal(show);
  }

  getStudentById(collection, doc) {
    this.commonService.getStudentById(collection, doc).subscribe(res => {
      this.currentStudent = res;
    })
  }

  edit(id) {
    this.getStudentById('student', id);
    this.toggleModal(true);
  }

  delete(id) {
    this.commonService.deleteStudent('student', id).subscribe(res => {

    })
  }
}