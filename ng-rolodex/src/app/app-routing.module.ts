import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ViewContactComponent } from './pages/view-contact/view-contact.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { CreateContactComponent } from './pages/create-contact/create-contact.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-contact', component: ViewContactComponent },
  {path: 'contact-details', component: ContactDetailsComponent},
  { path: 'create-contact', component: CreateContactComponent },
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
