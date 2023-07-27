import {Component, OnInit} from '@angular/core';
import {CaseStudyService} from "../../../services/case-study/case-study.service";

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.css']
})
export class CaseStudyComponent implements OnInit
{

  videoCaseStudy: any[] = [];
  videoGroups: any[] = [];

  constructor(private caseStudyService: CaseStudyService)
  {

  }

  ngOnInit()
  {
    this.caseStudyService.getAllCaseStudyVideo().subscribe((data: any[]) =>
    {
      this.videoCaseStudy = data;

      for (let i = 0; i < this.videoCaseStudy.length; i += 2)
      {
        const group = this.videoCaseStudy.slice(i, i + 2);
        this.videoGroups.push(group);
        console.log(this.videoGroups);
      }
    });

  }

}
