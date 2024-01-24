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
import {FeedbacksComponent} from "./components/administration/feedbacks/feedbacks.component";
import {FaqsComponent} from "./components/administration/faqs/faqs.component";
import {FaqsNewComponent} from "./components/administration/faqs/faqs-new/faqs-new.component";
import {FaqsListComponent} from "./components/administration/faqs/faqs-list/faqs-list.component";
import {FaqsEditComponent} from "./components/administration/faqs/faqs-edit/faqs-edit.component";
import {AdminAuthGuard} from "./guards/admin-auth.guard";
import {AdminSettingsComponent} from "./components/administration/admin-settings/admin-settings.component";
import {
  AdminSettingsPolicyComponent
} from "./components/administration/admin-settings/admin-settings-policy/admin-settings-policy.component";
import {
  AdminSettingsUserPolicyComponent
} from "./components/administration/admin-settings/admin-settings-user-policy/admin-settings-user-policy.component";
import {
  AdminSettingsUserTermsComponent
} from "./components/administration/admin-settings/admin-settings-user-terms/admin-settings-user-terms.component";
import {
  AdminSettingsPrivacyComponent
} from "./components/administration/admin-settings/admin-settings-privacy/admin-settings-privacy.component";
import {CommentsComponent} from "./components/administration/comments/comments.component";
import {PrivacyPolicyComponent} from "./components/privacy-policy/privacy-policy.component";
import {TermsConditionsComponent} from "./components/terms-conditions/terms-conditions.component";
import {AuthorizedComponent} from "./components/shared/authorized/authorized.component";
import {FeedbackGuard} from "./guards/feedback.guard";
import {LoadingComponent} from "./components/shared/loading/loading.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'references', component: ReferencesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog-det/:id', component: BlogDetComponent},
  {path: 'authorize', component: AuthorizedComponent},
  {path: 'loading', component: LoadingComponent},
  {
    path: 'login', component: LoginComponent, children: [
      {path: '', redirectTo: '/login/signin', pathMatch: 'full'},
      {path: 'signin', component: SigninFormComponent},
      {path: 'signup', component: SignupFormComponent}
    ]
  },
  {path: 'feedback', component: FeedbackComponent, canActivate: [FeedbackGuard]},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'terms', component: TermsConditionsComponent},
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
    path: 'admin', component: AdministrationComponent, canActivate: [AdminAuthGuard], children: [
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
      {path: 'feedback', component: FeedbacksComponent},
      {
        path: 'faq', component: FaqsComponent, children: [
          {path: '', redirectTo: '/admin/faq/new', pathMatch: 'full'},
          {path: 'new', component: FaqsNewComponent},
          {path: 'list', component: FaqsListComponent},
          {path: 'edit', component: FaqsEditComponent}
        ]
      },
      {path: 'comments', component: CommentsComponent},
      {
        path: 'settings', component: AdminSettingsComponent, children: [
          {path: '', redirectTo: '/admin/settings/user-policy', pathMatch: 'full'},
          {path: 'user-policy', component: AdminSettingsUserPolicyComponent},
          {path: 'user-terms', component: AdminSettingsUserTermsComponent},
          {path: 'policy', component: AdminSettingsPolicyComponent},
          {path: 'privacy', component: AdminSettingsPrivacyComponent},
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
