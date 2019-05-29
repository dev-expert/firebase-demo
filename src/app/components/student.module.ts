import { NgModule } from '@angular/core';
import { StudentComponent } from './student/student.component'
import { RouterModule } from '@angular/router';
import { ListComponent } from './student/list/list.component';
import { CreateComponent } from './student/create/create.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes = [
  {
    path: '',
    component: StudentComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
]
@NgModule({
  declarations: [
    StudentComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class StudentModule { }
