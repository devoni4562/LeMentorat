import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../services/article/article.service";
import {CategoryService} from "../../services/category/category.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/authenticator/auth.service";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit
{

  categories: any[] = [];
  form: FormGroup;
  authService: AuthService;

  constructor(private formBuilder: FormBuilder, private articleService: ArticleService,
              private categoryService: CategoryService, authService: AuthService)
  {
    this.authService = authService;

    this.form = this.formBuilder.group({
      writter: [this.authService.admin, Validators.required],
      category: ['', Validators.required],
      image: [''],
      paragraph: ['', Validators.required],
      video: [''],
      date: [new Date(), Validators.required]
    });
  }

  ngOnInit()
  {
    this.categoryService.getAllCategories().subscribe((categories) =>
    {
      this.categories = categories;
    });
  }

  submitForm()
  {
    console.log(this.form.value);
    this.articleService.createNewArticle(this.form.value);
  }
}
