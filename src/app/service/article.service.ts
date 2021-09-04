import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private httpClient: HttpClient) { }

  getAllArticle() {
    return this.httpClient.get(environment.apiUrl+"article/get");
  }

  UpdateArt(object:any) {
    return this.httpClient.patch(environment.apiUrl+`article/update/${object.id}`,object);
  }


}
