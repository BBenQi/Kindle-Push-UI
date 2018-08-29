import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public bookList = [{'name': '朝圣者', 'author': '不详'}, {'name': '河神', 'author': '天下霸唱'}];

  public page = 2;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  getBookList() {

  }

  pushBook(bookName: string) {
    this.router.navigateByUrl('/push/' + bookName);
  }
}
