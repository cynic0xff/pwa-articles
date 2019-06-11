import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles-technology',
  templateUrl: './articles-technology.component.html',
  styleUrls: ['./articles-technology.component.scss']
})
export class ArticlesTechnologyComponent implements OnInit {

  articles$: Observable<any>;

  constructor(private newsapi: NewsapiService) { }

  ngOnInit() {
    this.articles$ = this.newsapi.getArticlesTechnology();
  }

}
