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
  public pageNumber: number;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  selectPage() {
    this.router.navigateByUrl('/home/booklist/' + this.page);
  }
}
