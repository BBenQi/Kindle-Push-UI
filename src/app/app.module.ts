import { BookService } from './service/book.service';
import { AppRoutes } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { PushComponent } from './push/push.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BookListComponent } from './book-list/book-list.component';
import { AboutKindlePushComponent } from './about-kindle-push/about-kindle-push.component';
import { SendService } from './service/send.service';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      PushComponent,
      AboutMeComponent,
      BookListComponent,
      AboutKindlePushComponent
   ],
   imports: [
      BrowserModule,
      NgbModule,
      HttpClientModule,
      RouterModule,
      AppRoutes,
      FormsModule
   ],
   providers: [BookService, SendService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
