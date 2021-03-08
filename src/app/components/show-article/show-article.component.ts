import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent implements OnInit {
  currentId : number = 0;
  article : Article={
    title : '',
    content : ''
  };

  constructor(private route : ActivatedRoute,
              private articleService : ArticleService) { }

  ngOnInit(): void {
    this.getArticleById();
  }
  getArticleById()
  {

      this.route.params.subscribe((data : Params) =>{ /* Reactiviter */
      this.currentId = data.id;
      console.log(this.currentId);    
    })

    this.articleService.getArticle(this.currentId).subscribe(currentArticle =>{
    this.article = currentArticle;
    console.log('Naoufal',this.article);
    })
  }

}


