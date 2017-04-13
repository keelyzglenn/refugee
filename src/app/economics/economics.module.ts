import { NgModule } from '@angular/core';

import { EconomicsComponent }   from './economics.component';
import { routing } from './economics.routing';

@NgModule({
  imports: [routing],
  declarations: [EconomicsComponent]
})
export class EconomicsModule {}
