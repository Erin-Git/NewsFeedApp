import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SectionConst } from 'src/assets/helper-const/section-const';
import { ArticleService } from 'src/services/article.service';
import { AddEditArticleComponent } from '../add-edit-article/add-edit-article.component';
import { ArticleDetailsComponent } from '../article-details/article-details.component';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: any = [];
  section: any = null;
  dataLoaded: boolean = false;
  constructor(
    public articleService: ArticleService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getArticleList();
    this.section = localStorage.getItem("section");
  }
  getArticleList() {
    const section = localStorage.getItem("section");
    this.articleService.getArticleList().subscribe(res => {
      console.log(res);
      if (res.isExecuted) {
        this.dataLoaded = true;
      }
      if (section === "Home") {
        this.articles = res.result
      }
      else {
        this.articles = res.result.filter((q: any) => q.section == section)
      }
    })
  }
  addArticle() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    dialogConfig.height = '60';
    this.dialog.open(AddEditArticleComponent, dialogConfig);
    dialogConfig.id = this.section;
    this.getArticleList();
  }
  editArticle(record: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    dialogConfig.id = this.section;
    dialogConfig.data = record;
    this.dialog.open(AddEditArticleComponent, dialogConfig);
    this.getArticleList();
  }
  removeArticle(articleId: any) {
    this.articleService.removeArticle(articleId).subscribe(res => {
      if (res.isExecuted) {
        window.alert("Successfully Done !")
      }
      else {
        window.alert("An Error Occured !")
      }
      this.getArticleList();
    })
  }
  articleDetails(article: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    dialogConfig.data = article;
    this.dialog.open(ArticleDetailsComponent, dialogConfig);
  }
}
