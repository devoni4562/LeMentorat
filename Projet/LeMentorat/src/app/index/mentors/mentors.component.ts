import {Component} from '@angular/core';

@Component({
  selector: 'app-index-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent
{

  slides = [
    {
      img: 'assets/img/index/mentor.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at dui sit amet metus faucibus condimentum at vitae ipsum. Integer mattis aliquam gravida. Aenean lacus mi, ullamcorper non maximus quis, ornare a nulla. Duis vulputate justo ac risus commodo aliquam. Pellentesque sit amet felis in sem sagittis eleifend non nec magna. Mauris tincidunt velit non tellus sagittis lobortis. Pellentesque eget varius turpis.',
      name: 'mentor 1'
    },
    {
      img: 'assets/img/index/mentor.png',
      text: 'ipsum dolor sit amet, consectetur adipiscing elit. In at dui sit amet metus faucibus condimentum at vitae ipsum. Integer mattis aliquam gravida. Aenean lacus mi, ullamcorper non maximus quis, ornare a nulla. Duis vulputate justo ac risus commodo aliquam. Pellentesque sit amet felis in sem sagittis eleifend non nec magna. Mauris tincidunt velit non tellus sagittis lobortis. Pellentesque eget varius turpis.',
      name: 'mentor 2'
    },
    {
      img: 'assets/img/index/mentor.png',
      text: 'dolor sit amet, consectetur adipiscing elit. In at dui sit amet metus faucibus condimentum at vitae ipsum. Integer mattis aliquam gravida. Aenean lacus mi, ullamcorper non maximus quis, ornare a nulla. Duis vulputate justo ac risus commodo aliquam. Pellentesque sit amet felis in sem sagittis eleifend non nec magna. Mauris tincidunt velit non tellus sagittis lobortis. Pellentesque eget varius turpis.',
      name: 'mentor 3'
    },
    {
      img: 'assets/img/index/mentor.png',
      text: 'sit amet, consectetur adipiscing elit. In at dui sit amet metus faucibus condimentum at vitae ipsum. Integer mattis aliquam gravida. Aenean lacus mi, ullamcorper non maximus quis, ornare a nulla. Duis vulputate justo ac risus commodo aliquam. Pellentesque sit amet felis in sem sagittis eleifend non nec magna. Mauris tincidunt velit non tellus sagittis lobortis. Pellentesque eget varius turpis.',
      name: 'mentor 4'
    },
    // Ajoutez d'autres slides ici
  ];

  slideConfig = {"slidesToShow": 2, "slidesToScroll": 2, "prevArrow": '', "nextArrow": '', "dots": true};
}
