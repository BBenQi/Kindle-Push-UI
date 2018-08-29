import { SendService } from './../service/send.service';
import { BookService } from './../service/book.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.css']
})
export class PushComponent implements OnInit {
  public id: string; // 书籍id
  public bookName: string; // 书籍名称
  public email: string; // kindle 邮箱
  private bookDir: string; // 书籍地址
  constructor(private route: ActivatedRoute, private router: Router
    , private bookService: BookService, private sendService: SendService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.id = params.bookname;
        this.bookService.getBookById(this.id).subscribe(
          (datas) => {
            this.bookName = datas['data']['bookName'];
            this.bookDir = datas['data']['bookDir'];
          }
        );
      }
    );
  }

  sendEmail() {
    this.sendService.sendEmail(this.email, this.bookDir).subscribe(
      (datas) => {
        console.log(datas);
      }
    );
  }

}
