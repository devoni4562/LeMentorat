import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent
{

  @Input() bg: string = '';
  @Input() article: any;

  zoom: boolean = false;

}
