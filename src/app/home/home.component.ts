import { BookService } from './../service/book.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // 当前位于第几页book
  public page = 1;
  /**
   * 数据库中一共有多少页
   */
  public pageNumber: any;
  constructor(private http: HttpClient, private router: Router, private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBookNum().subscribe(
      (data) => {
        this.pageNumber = data['data'];
        console.log(this.pageNumber);
      }
    );
  }

  selectPage() {
    this.router.navigateByUrl('/home/booklist/' + this.page);
  }
}
