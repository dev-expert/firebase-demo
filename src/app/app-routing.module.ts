import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './components/student/student.component'
import { from } from 'rxjs';


const routes: Routes = [
  { path: '', redirectTo: '/student',  pathMatch: 'full'  },
  { path: 'student', loadChildren: './components/student.module#StudentModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
