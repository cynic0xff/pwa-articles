import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-articles-javascript',
  templateUrl: './articles-javascript.component.html',
  styleUrls: ['./articles-javascript.component.scss']
})
export class ArticlesJavascriptComponent implements OnInit {

  JSarticles$: Observable<any>;

  constructor(private newapiService: NewsapiService) { }

  ngOnInit() {

    this.JSarticles$ = this.newapiService.getArticlesJavaScript();
  }

}
