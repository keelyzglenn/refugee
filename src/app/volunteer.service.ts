import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Volunteer } from './volunteer.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class VolunteerService {
  volunteers: FirebaseListObservable<any[]>;


  constructor(private http: Http, private angularFire: AngularFire) {
    this.volunteers = angularFire.database.list('volunteers');

  }

  getVolunteers(){
    return this.volunteers;
  }

  getVolunteerById(volunteerId: string) {
    return this.angularFire.database.object('volunteers/' + volunteerId);
  }

}
