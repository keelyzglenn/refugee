import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationComponent } from './education.component';

const routes: Routes = [
  { path: '', component: EducationComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
