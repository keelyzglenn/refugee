import { NgModule } from '@angular/core';

import { ChildrenComponent }   from './children.component';
import { routing } from './children.routing';

@NgModule({
  imports: [routing],
  declarations: [ChildrenComponent]
})
export class ChildrenModule {}
