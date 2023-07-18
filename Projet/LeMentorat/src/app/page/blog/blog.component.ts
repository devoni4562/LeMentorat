import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ArticleService} from "../../services/article/article.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit
{

  @ViewChildren('categoryCheckbox') categoryCheckboxes!: QueryList<ElementRef>;

  articles: any[] = [];
  filteredArticles: any[] = [];
  categories: string[] = [];
  searchText: string = '';

  constructor(private articleService: ArticleService)
  {
  }

  ngOnInit()
  {
    this.articleService.getAllArticles().subscribe((data: any[]) =>
    {
      this.articles = data;
      this.categories = this.getDistinctCategories(this.articles);
      this.filteredArticles = this.articles;
    });
  }

  getDistinctCategories(articles: any[]): string[]
  {
    const categories = articles.map(article => article.category?.wording);
    return Array.from(new Set(categories.filter(Boolean)));
  }

  filterArticles()
  {
    const filterArticlesByCategory = () =>
    {
      const checkedCategories = this.categoryCheckboxes
        .filter(checkbox => checkbox.nativeElement.checked)
        .map(checkbox => checkbox.nativeElement.value);

      this.filteredArticles = this.articles.filter(article =>
        checkedCategories.length === 0 || checkedCategories.includes(article.category?.wording)
      );

      filterArticlesByName();
    };

    const filterArticlesByName = () =>
    {
      const searchText = this.searchText.toLowerCase().trim();
      this.filteredArticles = this.filteredArticles.filter(article =>
        !searchText || article.title.toLowerCase().includes(searchText)
      );
    };

    filterArticlesByCategory();
  }

}
