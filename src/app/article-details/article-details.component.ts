import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleService } from 'src/services/article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  constructor(private articleService: ArticleService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
article:any= this.data
  ngOnInit(): void {
  //   this.articleService.articleDetails(articleId).subscribe(res=>{
  //   console.log(res);
    
  // })
   }

}
