import { AboutKindlePushComponent } from './about-kindle-push/about-kindle-push.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { PushComponent } from './push/push.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [{ path: 'booklist/:page', component: BookListComponent }]
  },
  { path: 'push/:bookname', component: PushComponent },
  { path: 'about-me', component: AboutMeComponent },
  {path: 'about-kindle-push', component: AboutKindlePushComponent},
  { path: '', redirectTo: '/home/booklist/1', pathMatch: 'full' }
];

export const AppRoutes = RouterModule.forRoot(routes);
