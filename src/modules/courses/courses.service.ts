import { Injectable } from "@nestjs/common";
import { Course } from "./models/course.interface";
import { CreateCourseDto } from "./models/dtos/create-course";

@Injectable()
export class CoursesService {
    private readonly courses: Course[] = [];
    listCourses() {
        return this.courses;
    }
    createCourse(createCourseDto: CreateCourseDto) {
        this.courses.push(createCourseDto);
    }
    getCourse(id: number) {
        return this.courses[id];
    }
}