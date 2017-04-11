import { Pipe, PipeTransform } from '@angular/core';
import { Volunteer } from './volunteer.model';

@Pipe({
  name: 'volunteerFilter',
  pure: false
})
export class VolunteerFilterPipe implements PipeTransform {

  transform(input: Volunteer[], desiredOppurtunity) {
    var output: Volunteer[] = [];
    if(desiredOppurtunity === "local") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "local") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredOppurtunity === "global") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "abroad") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
