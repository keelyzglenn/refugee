import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { VolunteerDetailComponent } from './volunteer-detail/volunteer-detail.component';
import { CategoryPipe } from './category.pipe';
import { DonationComponent } from './donation/donation.component';
import { VolunteerFilterPipe } from './volunteer-filter-.pipe';
import { OrganizationComponent } from './organization/organization.component';
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { ForRefugeesComponent } from './for-refugees/for-refugees.component';
import { ThumbnailPipe } from './thumbnail.pipe';
import { Graph1Component } from './graph1/graph1.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
    apiKey: masterFirebaseConfig.apiKey,
    authDomain: masterFirebaseConfig.authDomain,
    databaseURL: masterFirebaseConfig.databaseURL,
    storageBucket: masterFirebaseConfig.storageBucket
  };

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    VolunteerComponent,
    VolunteerDetailComponent,
    CategoryPipe,
    DonationComponent,
    VolunteerFilterPipe,
    OrganizationComponent,
    OrganizationDetailComponent,
    ForRefugeesComponent,
    ThumbnailPipe,
    Graph1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    Angular2FontawesomeModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
