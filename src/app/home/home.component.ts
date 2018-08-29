import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public page = 2;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  selectPage() {
    this.router.navigateByUrl('/home/booklist/' + this.page);
  }
}
