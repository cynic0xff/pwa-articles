import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesTechnologyComponent } from './articles-technology/articles-technology.component';
import { ArticlesJavascriptComponent } from './articles-javascript/articles-javascript.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesTechnologyComponent },
  { path: 'articles-javascript', component: ArticlesJavascriptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
