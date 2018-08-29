import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  public bookList = [{ 'name': '朝圣者', 'author': '不详' }, { 'name': '河神', 'author': '天下霸唱' }];

  /**
   * 页码，从数据库分页查询
   */
  private page: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.page = params.page;
      }
    );

    /**
     * TODO
     * 从数据库中分页获取bookList
     * this.bookList = service.getBookList();
     */
  }

  /**
   * 跳转到推送书籍的界面
   * @param bookName 要推送书籍的名称
   */
  pushBook(bookName: string) {
    this.router.navigateByUrl('/push/' + bookName);
  }

}
