import { NgModule } from '@angular/core';

import { HealthComponent }   from './health.component';
import { routing } from './health.routing';

@NgModule({
  imports: [routing],
  declarations: [HealthComponent]
})
export class HealthModule {}
