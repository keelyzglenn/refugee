import { NgModule } from '@angular/core';

import { HowToHelpComponent }   from './how-to-help.component';
import { routing } from './help.routing';

@NgModule({
  imports: [routing],
  declarations: [HowToHelpComponent]
})
export class HelpModule {}
