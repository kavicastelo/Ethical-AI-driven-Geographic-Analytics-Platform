import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
import {FeedbackComponent} from "./components/feedback/feedback.component";
import {FaqComponent} from "./components/faq/faq.component";
import {AdminLoginComponent} from "./components/admin-login/admin-login.component";
import {ForbiddenComponent} from "./components/shared/forbidden/forbidden.component";
import {AdministrationComponent} from "./components/administration/administration.component";
import {ForecastComponent} from "./components/administration/forecast/forecast.component";
import {ForecastNewComponent} from "./components/administration/forecast/forecast-new/forecast-new.component";
import {ForecastEditComponent} from "./components/administration/forecast/forecast-edit/forecast-edit.component";
import {UsersComponent} from "./components/administration/users/users.component";
import {UsersListComponent} from "./components/administration/users/users-list/users-list.component";
import {UsersRequestsComponent} from "./components/administration/users/users-requests/users-requests.component";
import {UsersAdminsComponent} from "./components/administration/users/users-admins/users-admins.component";
import {UsersNewAdminComponent} from "./components/administration/users/users-new-admin/users-new-admin.component";
import {BlogsComponent} from "./components/administration/blogs/blogs.component";
import {BlogsNewComponent} from "./components/administration/blogs/blogs-new/blogs-new.component";
import {BlogsListComponent} from "./components/administration/blogs/blogs-list/blogs-list.component";
import {BlogsEditComponent} from "./components/administration/blogs/blogs-edit/blogs-edit.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'references', component: ReferencesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog-det/:id', component: BlogDetComponent},
  {
    path: 'login', component: LoginComponent, children: [
      {path: '', redirectTo: '/login/signin', pathMatch: 'full'},
      {path: 'signin', component: SigninFormComponent},
      {path: 'signup', component: SignupFormComponent}
    ]
  },
  {path: 'feedback', component: FeedbackComponent},
  {path: 'faq', component: FaqComponent},
  {
    path: 'dashboard', component: DashbordComponent, canActivate: [AuthGuard], children: [
      {
        path: 'administration', component: AdminLoginComponent, children: [
          {path: '', redirectTo: '/dashboard/administration/signin', pathMatch: 'full'},
          {path: 'signin', component: SigninFormComponent},
          {path: 'signup', component: ForbiddenComponent}
        ]
      }
    ]
  },
  {
    path: 'admin', component: AdministrationComponent, canActivate: [AuthGuard], children: [
      {path: '', redirectTo: '/admin/forecast/new', pathMatch: 'full'},
      {
        path: 'forecast', component: ForecastComponent, children: [
          {path: '', redirectTo: '/admin/forecast/new', pathMatch: 'full'},
          {path: 'new', component: ForecastNewComponent},
          {path: 'edit', component: ForecastEditComponent}
        ]
      },
      {
        path: 'users', component: UsersComponent, children: [
          {path: '', redirectTo: '/admin/users/list', pathMatch: 'full'},
          {path: 'list', component: UsersListComponent},
          {path: 'requests', component: UsersRequestsComponent},
          {path: 'admins', component: UsersAdminsComponent},
          {path: 'new', component: UsersNewAdminComponent}
        ]
      },
      {
        path: 'blogs', component: BlogsComponent, children: [
          {path: '', redirectTo: '/admin/blogs/new', pathMatch: 'full'},
          {path: 'new', component: BlogsNewComponent},
          {path: 'list', component: BlogsListComponent},
          {path: 'edit', component: BlogsEditComponent}
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
