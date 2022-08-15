import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';

const routes: Routes = [{
  path: 'registration',
  component: UserRegistrationComponent
},
{
  path: 'details',
  component: UserDetailsComponent
},
{
  path: '',
  redirectTo: 'registration',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
