import { Controller, Get, Post, Body, Param, ParseIntPipe } from "@nestjs/common";
import { CoursesService } from "./courses.service";
import { CreateCourseDto } from "./models/dtos/create-course";

@Controller('courses')
export class CoursesController {
    constructor(
        private readonly coursesService: CoursesService
    ) { }
    @Get()
    listCourses() {
        return this.coursesService.listCourses();
    }
    @Get(':id')
    getCourse(@Param('id', ParseIntPipe) id: number) {
        return this.coursesService.getCourse(id);
    }

    @Post()
    createCourse(@Body() createCourseDto: CreateCourseDto) {
        return this.coursesService.createCourse(createCourseDto);
    }




}
