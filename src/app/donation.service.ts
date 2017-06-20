import { Injectable } from '@angular/core';
import { Donation } from './donation.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DonationService {
  donations: FirebaseListObservable<any[]>;


  constructor(private angularFire: AngularFireDatabase) {
    this.donations = angularFire.list('donations');
  }

  getDonations(){
    return this.donations;
  }

  addDonation(newDonation: Donation){
    this.donations.push(newDonation);
  }
}
