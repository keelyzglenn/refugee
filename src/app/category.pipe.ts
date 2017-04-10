import {Pipe, PipeTransform} from '@angular/core';
import {Organization} from './organization.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { RefugeeService } from './refugee.service';

@Pipe({
  name: 'category',
  pure: false
})


export class CategoryPipe implements PipeTransform {
  organization: string;

  constructor(private refugeeService: RefugeeService, private af: AngularFire) {}

  transform(input: Organization[]){
    if(this.organization != "All"){
      var filteredBooks = this.af.database.list('organizations',{
        query:{
          orderByChild:'type',
          equalTo: this.organization
        }
      });
      return filteredBooks;
    } else {
      return this.af.database.list('organizations');
    }
  }


}
