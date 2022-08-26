import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';

const routes: Routes = [
  { path: "articles", component: ArticleListComponent },
  { path: "home", component: ArticleListComponent },
  { path: "world", component: ArticleListComponent },
  { path: "us", component: ArticleListComponent },
  { path: "science", component: ArticleListComponent },
  { path: "arts", component: ArticleListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
