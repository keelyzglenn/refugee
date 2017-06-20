import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Volunteer } from './volunteer.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class VolunteerService {
  volunteers: FirebaseListObservable<any[]>;


  constructor(private http: Http, private angularFire: AngularFireDatabase) {
    this.volunteers = angularFire.list('volunteers');

  }

  getVolunteers(){
    return this.volunteers;
  }

  getVolunteerById(volunteerId: string) {
    return this.angularFire.object('volunteers/' + volunteerId);
  }

}
