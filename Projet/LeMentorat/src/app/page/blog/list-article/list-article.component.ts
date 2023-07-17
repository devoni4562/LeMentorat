import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent
{

  @Input() id: string = '';
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() paragraph: string = '';
  @Input() writter: any;


}
