import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { CommonService } from "../../../services/common.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @Output() toggleModal = new EventEmitter();
  @Input() currentStudent: any;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  closeModal(hide) {
    this.toggleModal.emit(hide);
  }

  save() {
    if (this.currentStudent && this.currentStudent.id) {
      this.updateStudent('student');
    } else {
      this.addStudent('student');
    }
    this.closeModal(false);
  }

  addStudent(collection) {
    this.commonService.addStudent(collection, this.currentStudent).subscribe(res => {
    })
  }

  updateStudent(collection) {
    this.commonService.updateStudent('student', this.currentStudent).subscribe(() => {
    })
  }
}
