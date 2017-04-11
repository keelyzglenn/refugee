import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { HowToHelpComponent } from './how-to-help/how-to-help.component';
import { VolunteerDetailComponent } from './volunteer-detail/volunteer-detail.component';
import { DonationComponent } from './donation/donation.component';


import { OrganizationComponent } from './organization/organization.component';
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'volunteer',
    component: VolunteerComponent
  },
  {
    path: 'how-to-help',
    component: HowToHelpComponent
  },
  {
    path: 'volunteers/:id',
    component: VolunteerDetailComponent
  },
  {
    path: 'donation',
    component: DonationComponent
  },
  {
    path: 'organization',
    component: OrganizationComponent
  },
  {
    path: 'organization/:id',
    component: OrganizationDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
