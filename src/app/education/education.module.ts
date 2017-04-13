import { NgModule } from '@angular/core';

import { EducationComponent }   from './education.component';
import { routing } from './education.routing';

@NgModule({
  imports: [routing],
  declarations: [EducationComponent]
})
export class EducationModule {}
