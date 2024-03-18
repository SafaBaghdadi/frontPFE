import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursComponent } from './cours/cours.component';
import { CourseDetailsComponent } from './course-details/course-details.component';


const routes: Routes = [
  { path: 'cours', component: CoursComponent },
  { path: 'course-details', component:CourseDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
