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

export const firebaseConfig = {
  apiKey: "AIzaSyBGsTHHDr-4K_-rdFM9H5ASoImvk-aENjk",
    authDomain: "refugee-app.firebaseapp.com",
    databaseURL: "https://refugee-app.firebaseio.com",
    projectId: "refugee-app",
    storageBucket: "refugee-app.appspot.com",
    messagingSenderId: "558674903302"
  };

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    VolunteerComponent,
    HowToHelpComponent,
    VolunteerDetailComponent
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
