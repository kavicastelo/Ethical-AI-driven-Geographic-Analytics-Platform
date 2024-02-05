import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {SignUpComponent} from './components/shared/sign-up/sign-up.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {ContactFormComponent} from './components/shared/contact-form/contact-form.component';
import {ReferencesComponent} from './components/references/references.component';
import {ContactComponent} from './components/contact/contact.component';
import {BlogComponent} from './components/blog/blog.component';
import {BlogDetComponent} from './components/blog-det/blog-det.component';
import {LoginComponent} from './components/login/login.component';
import {DashbordComponent} from './components/dashbord/dashbord.component';
import {SignupFormComponent} from './components/shared/signup-form/signup-form.component';
import {SigninFormComponent} from './components/shared/signin-form/signin-form.component';
import {FeedbackComponent} from './components/feedback/feedback.component';
import {HttpClientModule} from "@angular/common/http";
import {FaqComponent} from './components/faq/faq.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {AdminLoginComponent} from './components/admin-login/admin-login.component';
import {ForbiddenComponent} from './components/shared/forbidden/forbidden.component';
import {AdministrationComponent} from './components/administration/administration.component';
import {ForecastComponent} from './components/administration/forecast/forecast.component';
import {ForecastNewComponent} from './components/administration/forecast/forecast-new/forecast-new.component';
import {ForecastEditComponent} from './components/administration/forecast/forecast-edit/forecast-edit.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {UsersComponent} from './components/administration/users/users.component';
import {UsersListComponent} from './components/administration/users/users-list/users-list.component';
import {UsersRequestsComponent} from './components/administration/users/users-requests/users-requests.component';
import {UsersAdminsComponent} from './components/administration/users/users-admins/users-admins.component';
import {UsersNewAdminComponent} from './components/administration/users/users-new-admin/users-new-admin.component';
import {BlogsComponent} from './components/administration/blogs/blogs.component';
import {BlogsNewComponent} from './components/administration/blogs/blogs-new/blogs-new.component';
import {BlogsListComponent} from './components/administration/blogs/blogs-list/blogs-list.component';
import {BlogsEditComponent} from './components/administration/blogs/blogs-edit/blogs-edit.component';
import {ComingSoonComponent} from './components/shared/coming-soon/coming-soon.component';
import {FeedbacksComponent} from './components/administration/feedbacks/feedbacks.component';
import {FaqsComponent} from './components/administration/faqs/faqs.component';
import {FaqsNewComponent} from './components/administration/faqs/faqs-new/faqs-new.component';
import {FaqsListComponent} from './components/administration/faqs/faqs-list/faqs-list.component';
import {FaqsEditComponent} from './components/administration/faqs/faqs-edit/faqs-edit.component';
import {AdminSettingsComponent} from './components/administration/admin-settings/admin-settings.component';
import {
  AdminSettingsPolicyComponent
} from './components/administration/admin-settings/admin-settings-policy/admin-settings-policy.component';
import {
  AdminSettingsUserPolicyComponent
} from './components/administration/admin-settings/admin-settings-user-policy/admin-settings-user-policy.component';
import {
  AdminSettingsUserTermsComponent
} from './components/administration/admin-settings/admin-settings-user-terms/admin-settings-user-terms.component';
import {
  AdminSettingsPrivacyComponent
} from './components/administration/admin-settings/admin-settings-privacy/admin-settings-privacy.component';
import {MarkdownModule} from "ngx-markdown";
import { CommentsComponent } from './components/administration/comments/comments.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { AuthorizedComponent } from './components/shared/authorized/authorized.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { UserSettingsComponent } from './components/dashbord/user-settings/user-settings.component';
import { WelcomeComponent } from './components/shared/welcome/welcome.component';
import { MonitorComponent } from './components/dashbord/monitor/monitor.component';
import { Pm25Component } from './components/dashbord/monitor/pm25/pm25.component';
import { Pm10Component } from './components/dashbord/monitor/pm10/pm10.component';
import { Co2Component } from './components/dashbord/monitor/co2/co2.component';
import { OzoneComponent } from './components/dashbord/monitor/ozone/ozone.component';
import { No2Component } from './components/dashbord/monitor/no2/no2.component';
import { MetrologicalDataComponent } from './components/dashbord/metrological-data/metrological-data.component';
import { TemperatureComponent } from './components/dashbord/metrological-data/temperature/temperature.component';
import { HumidityComponent } from './components/dashbord/metrological-data/humidity/humidity.component';
import { WindSpeedComponent } from './components/dashbord/metrological-data/wind-speed/wind-speed.component';
import { PrecipitationComponent } from './components/dashbord/metrological-data/precipitation/precipitation.component';
import { PredictionComponent } from './components/dashbord/prediction/prediction.component';
import { PredictionGuideComponent } from './components/dashbord/prediction/prediction-guide/prediction-guide.component';
import { PredictionAirComponent } from './components/dashbord/prediction/prediction-air/prediction-air.component';
import { PredictionMetroComponent } from './components/dashbord/prediction/prediction-metro/prediction-metro.component';
import { StatsComponent } from './components/dashbord/stats/stats.component';
import { StatsAirComponent } from './components/dashbord/stats/stats-air/stats-air.component';
import { StatsMetroComponent } from './components/dashbord/stats/stats-metro/stats-metro.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import { GraphsComponent } from './components/dashbord/graphs/graphs.component';
import { GraphsAirComponent } from './components/dashbord/graphs/graphs-air/graphs-air.component';
import { GraphsMetroComponent } from './components/dashbord/graphs/graphs-metro/graphs-metro.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SignUpComponent,
    ContactFormComponent,
    ReferencesComponent,
    ContactComponent,
    BlogComponent,
    BlogDetComponent,
    LoginComponent,
    DashbordComponent,
    SignupFormComponent,
    SigninFormComponent,
    FeedbackComponent,
    FaqComponent,
    AdminLoginComponent,
    ForbiddenComponent,
    AdministrationComponent,
    ForecastComponent,
    ForecastNewComponent,
    ForecastEditComponent,
    UsersComponent,
    UsersListComponent,
    UsersRequestsComponent,
    UsersAdminsComponent,
    UsersNewAdminComponent,
    BlogsComponent,
    BlogsNewComponent,
    BlogsListComponent,
    BlogsEditComponent,
    ComingSoonComponent,
    FeedbacksComponent,
    FaqsComponent,
    FaqsNewComponent,
    FaqsListComponent,
    FaqsEditComponent,
    AdminSettingsComponent,
    AdminSettingsPolicyComponent,
    AdminSettingsUserPolicyComponent,
    AdminSettingsUserTermsComponent,
    AdminSettingsPrivacyComponent,
    CommentsComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    AuthorizedComponent,
    LoadingComponent,
    FooterComponent,
    UserSettingsComponent,
    WelcomeComponent,
    MonitorComponent,
    Pm25Component,
    Pm10Component,
    Co2Component,
    OzoneComponent,
    No2Component,
    MetrologicalDataComponent,
    TemperatureComponent,
    HumidityComponent,
    WindSpeedComponent,
    PrecipitationComponent,
    PredictionComponent,
    PredictionGuideComponent,
    PredictionAirComponent,
    PredictionMetroComponent,
    StatsComponent,
    StatsAirComponent,
    StatsMetroComponent,
    GraphsComponent,
    GraphsAirComponent,
    GraphsMetroComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    MatSelectModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatTooltipModule,
    FormsModule,
    MarkdownModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
