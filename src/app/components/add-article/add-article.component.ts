import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  myArticle : Article = {
    title:'',
    content:''
  };
  constructor(private articleService : ArticleService,
              private router : Router) { }

  ngOnInit(): void {
  }
  addArticle(data){
    if(data.invalid)
    {
      alert('please verify your data on Form');
      return;
    }
    this.articleService.persist(data.value)
          .subscribe(data => this.router.navigate(['/articles']))
    console.log(data);
  }

  log(data){
    console.log(data);
  }
}
