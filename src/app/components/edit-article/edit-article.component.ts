import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  articleToEdit : Article;
  articleFrom : FormGroup;

  constructor(private articleService : ArticleService,
              private route : ActivatedRoute,
              private router: Router) 
              {
               
                this.articleFrom = new FormGroup({
                  // id : new FormControl(null),
                  title : new FormControl(null, [Validators.required,Validators.minLength(6)]),
                  category : new FormControl(null),
                  content : new FormControl(null,[Validators.required, Validators.minLength(20)]),
                  active : new FormControl(true)
                })
                
              }


  ngOnInit(): void {
    this.route.params.subscribe((params : Params) =>{
        this.loadOneArticle(params.id);
    })
  }

  loadOneArticle(id : number)
  {
    this.articleService.getArticle(id).subscribe((article : Article)=>{
      this.articleToEdit = article;
      this.articleFrom.patchValue(article); // patch and set  
      console.log(this.articleToEdit);
    })
  }

  dumpData(){
    let fake = {
      title : 'Hello',
      content : 'my content',
      // category : 'fashion',
      active: true
    }

    this.articleFrom.patchValue(fake);
  }

  checkForm(){
    if( this.articleFrom.invalid) return;
    this.updateArticle();
  }

  updateArticle(){
    this.articleService.update(this.articleToEdit.id,this.articleFrom.value)
                      .subscribe(data =>{
                        console.log(data);
                        this.router.navigateByUrl('/articles');
                      })
  }

}
