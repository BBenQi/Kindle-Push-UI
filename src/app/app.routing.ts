import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { PushComponent } from './push/push.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [{path: 'booklist/:page', component: BookListComponent}]
  },
  { path: 'push/:bookname', component: PushComponent },
  {path: '', redirectTo: '/home/booklist/1', pathMatch: 'full'}
];

export const AppRoutes = RouterModule.forRoot(routes);
