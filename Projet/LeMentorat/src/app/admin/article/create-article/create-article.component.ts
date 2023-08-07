import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../../services/article/article.service";
import {CategoryService} from "../../../services/category/category.service";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/authenticator/auth.service";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit
{

  categories: any[] = [];
  form: FormGroup;
  formParagraphs!: FormArray;
  protected readonly document = document;

  constructor(private formBuilder: FormBuilder, private articleService: ArticleService,
              private categoryService: CategoryService, private authService: AuthService)
  {


    this.form = this.formBuilder.group({
      writterId: [this.authService.admin.id, Validators.required],
      category: ['', Validators.required],
      image: [null],
      video: [null],
      title: ['', Validators.required],
      paragraphs: this.formBuilder.array([])
    });
  }

  ngOnInit()
  {
    this.categoryService.getAllCategories().subscribe((categories) =>
    {
      this.categories = categories;
    });

    this.formParagraphs = this.form.get('paragraphs') as FormArray;
  }

  submitForm()
  {
    this.articleService.createNewArticle(this.form);
  }

  addParagraph()
  {
    const newParagraph = this.formBuilder.group({
      paragraphTitle: ['', Validators.required],
      paragraphImage: [null],
      paragraphText: ['', Validators.required],
      paragraphLink: [null],
      paragraphLinkText: [null],
    });

    this.formParagraphs.push(newParagraph);
    console.log(this.formParagraphs);
    console.log(this.form);
  }
}
