import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowToHelpComponent } from './how-to-help.component';

const routes: Routes = [
  { path: '', component: HowToHelpComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
