import { Routes, RouterModule } from '@angular/router';

import { LogoutComponent } from './logout.component';
import { SigninComponent } from './signin.component';
import { SignupComponent } from './signup.component';


export const auth_routes: Routes = [
  {path: '', redirectTo: 'signup', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'logout', component: LogoutComponent}
]

export const authRouting = RouterModule.forChild(auth_routes);
