import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from './url';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url = apiUrl
  constructor(private http: HttpClient) { }
  getArticleList(): Observable<any> {
    return this.http.get(this.url + `Article/GetArticleList`)
  }
  addEditArticle(data: any): Observable<any> {
    return this.http.post(this.url + `Article/AddEditArticle`, data)
  }
  removeArticle(id: any): Observable<any> {
    return this.http.delete(this.url + `Article/RemoveArticle/${id}`)
  }
  //not used
  articleDetails(id: any): Observable<any> {
    return this.http.get(this.url + `Article/GetArticle/${id}`)
  }
}
