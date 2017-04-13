import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EconomicsComponent } from './economics.component';

const routes: Routes = [
  { path: '', component: EconomicsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
