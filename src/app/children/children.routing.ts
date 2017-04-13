import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildrenComponent } from './children.component';

const routes: Routes = [
  { path: '', component: ChildrenComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
