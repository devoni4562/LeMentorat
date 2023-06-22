import {Component, OnInit} from '@angular/core';
import {MentorService} from "../../services/mentor/mentor.service";

@Component({
  selector: 'app-index-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent implements OnInit
{
  mentors: any[] = [];
  slideConfig = {"slidesToShow": 2, "slidesToScroll": 2, "prevArrow": '', "nextArrow": '', "dots": true};

  constructor(private mentorService: MentorService)
  {
  }

  ngOnInit()
  {
    this.mentorService.getMentors().subscribe(data =>
    {
      this.mentors = data;
    });
  }

}
