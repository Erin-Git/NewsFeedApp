import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleService } from 'src/services/article.service';

@Component({
  selector: 'app-add-edit-article',
  templateUrl: './add-edit-article.component.html',
  styleUrls: ['./add-edit-article.component.css']
})
export class AddEditArticleComponent implements OnInit {
  sectionLocal: any = null;
  articleId: any = 0;
  constructor(
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  articleForm = this.formBuilder.group({
    abstract: ['', Validators.required],
    byLine: [''],
    desFacet: [''],
    geoFacet: [''],
    itemType: ['', Validators.required],
    kicker: [''],
    materialTypeFacet: [''],
    orgFacet: [''],
    perFacet: [''],
    publishedDate: [Validators.required],
    section: [this.sectionLocal],
    shortUrl: ['', Validators.required],
    subSection: [''],
    title: ['', Validators.required],
    url: [''],
    uri: [''],
  });
  ngOnInit(): void {
    this.sectionLocal = localStorage.getItem("section");
    if (this.data) {
      console.log(this.data);
      this.articleId = this.data.articleId
      this.abstract!.patchValue(this.data.abstract)
      this.byLine!.patchValue(this.data.byLine)
      this.desFacet!.patchValue(this.data.desFacet)
      this.geoFacet!.patchValue(this.data.geoFacet)
      this.itemType!.patchValue(this.data.itemType)
      this.kicker!.patchValue(this.data.kicker)
      this.materialTypeFacet!.patchValue(this.data.materialTypeFacet)
      this.orgFacet!.patchValue(this.data.orgFacet)
      this.perFacet!.patchValue(this.data.perFacet)
      this.publishedDate!.patchValue(this.data.publishedDate)
      this.shortUrl!.patchValue(this.data.shortUrl)
      this.subSection!.patchValue(this.data.subSection)
      this.title!.patchValue(this.data.title)
      this.url!.patchValue(this.data.url)
      this.uri!.patchValue(this.data.uri)
    }
  }

  get abstract() {
    return this.articleForm.get("abstract");
  }
  get byLine() {
    return this.articleForm.get("byLine");
  }
  get desFacet() {
    return this.articleForm.get("desFacet");
  }
  get geoFacet() {
    return this.articleForm.get("geoFacet");
  }
  get itemType() {
    return this.articleForm.get("itemType");
  }
  get kicker() {
    return this.articleForm.get("kicker");
  }
  get materialTypeFacet() {
    return this.articleForm.get("materialTypeFacet");
  }
  get orgFacet() {
    return this.articleForm.get("orgFacet");
  }
  get perFacet() {
    return this.articleForm.get("perFacet");
  }
  get publishedDate() {
    return this.articleForm.get("publishedDate");
  }
  get subSection() {
    return this.articleForm.get("subSection");
  }
  get shortUrl() {
    return this.articleForm.get("shortUrl");
  }
  get title() {
    return this.articleForm.get("title");
  }
  get url() {
    return this.articleForm.get("url");
  }
  get uri() {
    return this.articleForm.get("uri");
  }
  submit() {
    const formdata: any = {
      articleId: this.articleId,
      abstract: this.articleForm.value.abstract,
      byLine: this.articleForm.value.byLine,
      desFacet: this.articleForm.value.desFacet,
      geoFacet: this.articleForm.value.geoFacet,
      itemType: this.articleForm.value.itemType,
      kicker: this.articleForm.value.kicker,
      materialTypeFacet: this.articleForm.value.materialTypeFacet,
      orgFacet: this.articleForm.value.orgFacet,
      perFacet: this.articleForm.value.perFacet,
      publishedDate: this.articleForm.value.publishedDate,
      section: this.sectionLocal,
      shortUrl: this.articleForm.value.shortUrl,
      subSection: this.articleForm.value.subSection,
      title: this.articleForm.value.title,
      url: this.articleForm.value.url,
      uri: this.articleForm.value.uri,
    }
    this.articleService.addEditArticle(formdata).subscribe(res => {
      if (res.isExecuted) {
        window.alert("Successfully Done !")
      }
      else {
        window.alert("An Error Occured !")
      }
    },
      (error: any) => {
        window.alert(error)
      });
  }
}
