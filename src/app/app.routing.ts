import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { PushComponent } from './push/push.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'push/:bookname', component: PushComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);
