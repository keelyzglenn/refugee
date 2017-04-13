import { Injectable } from '@angular/core';
import { Donation } from './donation.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class DonationService {
  donations: FirebaseListObservable<any[]>;


  constructor(private angularFire: AngularFire) {
    this.donations = angularFire.database.list('donations');
  }

  getDonations(){
    return this.donations;
  }

  addDonation(newDonation: Donation){
    this.donations.push(newDonation);
  }
}
