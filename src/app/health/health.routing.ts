import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthComponent } from './health.component';

const routes: Routes = [
  { path: '', component: HealthComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
