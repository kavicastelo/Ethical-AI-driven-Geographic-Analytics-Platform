import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ReferencesComponent} from "./components/references/references.component";
import {ContactComponent} from "./components/contact/contact.component";
import {BlogComponent} from "./components/blog/blog.component";
import {BlogDetComponent} from "./components/blog-det/blog-det.component";
import {LoginComponent} from "./components/login/login.component";
import {DashbordComponent} from "./components/dashbord/dashbord.component";
import {AuthGuard} from "./guards/auth.guard";
import {SigninFormComponent} from "./components/shared/signin-form/signin-form.component";
import {SignupFormComponent} from "./components/shared/signup-form/signup-form.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-det/:id', component: BlogDetComponent },
  { path: 'login', component: LoginComponent, children: [
    { path: '', redirectTo: '/login/signin', pathMatch: 'full' },
    { path: 'signin', component: SigninFormComponent },
    { path: 'signup', component: SignupFormComponent }
  ]},
  { path: 'dashboard', component: DashbordComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
