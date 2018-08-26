import { AppRoutes } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      NgbModule,
      HttpClientModule,
      RouterModule,
      AppRoutes
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
