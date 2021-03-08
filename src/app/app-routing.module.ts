import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { ListArticlesComponent } from './components/list-articles/list-articles.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShowArticleComponent } from './components/show-article/show-article.component';

const routes: Routes = [
  {path : 'articles', component : ListArticlesComponent},
  {path : 'articles/add', component : AddArticleComponent},
  {path : 'articles/:id/edit', component : EditArticleComponent},
  {path : 'articles/:id', component : ShowArticleComponent},
  {path : '', redirectTo : '/articles', pathMatch : 'full'},
  {path : '**', component : PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
