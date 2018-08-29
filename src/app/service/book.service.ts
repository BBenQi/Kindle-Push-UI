import { ProjectConstant } from './ProjectConstant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBookList(page, size) {
    return this.http.get(ProjectConstant.baseUrl + '/book/?page=' + page + '&size=' + size);
  }
  getBookNum() {
    return this.http.get(ProjectConstant.baseUrl + '/book/count');
  }

  getBookById(id) {
    return this.http.get(ProjectConstant.baseUrl + '/book/' + id);
  }
}
