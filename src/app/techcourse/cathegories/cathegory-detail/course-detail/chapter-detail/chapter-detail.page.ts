import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TechcoursesService } from 'src/app/techcourse/techcourses.service';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.page.html',
  styleUrls: ['./chapter-detail.page.scss'],
})
export class ChapterDetailPage implements OnInit {

  chapter: ChapterDetailPage;

  courses: import("c:/Users/HP/Desktop/myApp/src/app/techcourse/chapter.model").Chapter;
  constructor(private route : ActivatedRoute,
    private courseService : TechcoursesService,
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param=>{

      let id= param.get("categoryId");
      let idcourse= param.get("courseId");
      let idchapter= param.get("chapterId");
      this.courses=this.courseService.getOneCategory(id).courses.find(courses=> courses.id==idcourse).chapters.find(chapters=> chapters.id==idchapter);
       console.log(this.courses);
    })

  }

}
