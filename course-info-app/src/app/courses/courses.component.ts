import { Component } from '@angular/core';
import  { Course }  from './course.interface';
import { COURSES } from '../test-course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  course: Course = {
    course_id: 101,
    course_title: 'Web Development',
    semester: 'One',
    period: 'Wednesday 4-6pm',
    lecturer: 'Dr. Jian Yu',
  };

  courses = COURSES;

  selectedCourse?: Course;

  onSelect(course: Course): void {
    this.selectedCourse = course;
  }
  
}
