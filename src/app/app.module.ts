import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { HowToHelpComponent } from './how-to-help/how-to-help.component';
import { VolunteerDetailComponent } from './volunteer-detail/volunteer-detail.component';
import { CategoryPipe } from './category.pipe';
import { DonationComponent } from './donation/donation.component';
import { VolunteerFilterPipe } from './volunteer-filter-.pipe';
import { OrganizationComponent } from './organization/organization.component';
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';
import { HealthComponent } from './health/health.component';
import { ForRefugeesComponent } from './for-refugees/for-refugees.component';

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
    HowToHelpComponent,
    VolunteerDetailComponent,
    CategoryPipe,
    DonationComponent,
    VolunteerFilterPipe,
    OrganizationComponent,
    OrganizationDetailComponent,
    HealthComponent,
    ForRefugeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
