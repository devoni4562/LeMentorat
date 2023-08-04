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
    paragraphs!: FormArray;

    constructor(private formBuilder: FormBuilder, private articleService: ArticleService,
                private categoryService: CategoryService, private authService: AuthService)
    {


        this.form = this.formBuilder.group({
            writterId: [this.authService.admin.id, Validators.required],
            category: ['', Validators.required],
            image: [null],
            video: [''],
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

        this.paragraphs = this.form.get('paragraphs') as FormArray;
    }

    submitForm()
    {
        for (let i = 0; i < this.paragraphs.length; i++)
        {
            const linkValue = this.form.get('link' + i)?.value;
            if (linkValue)
            {
                this.form.addControl('linkText' + i, this.formBuilder.control(''));
            }
        }

        this.articleService.createNewArticle(this.form);
    }

    addParagraph()
    {
        const newParagraph = this.formBuilder.group({
            title: ['', Validators.required],
            image: [null],
            text: ['', Validators.required],
            link: ['']
        });

        this.paragraphs.push(newParagraph);
    }
}
