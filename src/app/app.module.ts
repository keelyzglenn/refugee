import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { VolunteerFilterPipe } from './volunteer-filter-.pipe';
import { OrganizationComponent } from './organization/organization.component';
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';


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
<<<<<<< HEAD
    VolunteerFilterPipe
=======
    OrganizationComponent,
    OrganizationDetailComponent
>>>>>>> c0d6db36ab54a277c1c55199cc02207871d92a95
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
