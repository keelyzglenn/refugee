import {Pipe, PipeTransform} from '@angular/core';
import { Organization } from './organization.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { RefugeeService } from './refugee.service';

@Pipe({
  name: 'category'
})


export class CategoryPipe implements PipeTransform {
  organization: string;

  constructor(private refugeeService: RefugeeService, private af: AngularFireDatabase) {}

  transform(value: any, organization){
    if(organization != "allCategories"){
      var filteredBooks = this.af.list('organizations',{
        query:{
          orderByChild:'type',
          equalTo: organization
        }
      });
      return filteredBooks;
    } else {
      return this.af.list('organizations');
    }
  }


}
