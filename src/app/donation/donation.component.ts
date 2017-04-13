import { Component, OnInit } from '@angular/core';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormsModule }   from '@angular/forms';
import { Donation } from '../donation.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { DonationService } from '../donation.service';
import { Router } from '@angular/router';
// import { FORM_DIRECTIVES } from '@angular/common';
// import { RadioControlValueAccessor } from './radio_value_accessor';


@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
  // directives: [FORM_DIRECTIVES, RadioControlValueAccessor],
  providers: [Ng2Bs3ModalModule,
            FormsModule,
          DonationService]
})

export class DonationComponent implements OnInit {
  model;
  donations: FirebaseListObservable<any[]>;

  constructor(private router: Router, private donationService: DonationService) {
    this.model = {
      }
  }

  ngOnInit() {
    this.donations = this.donationService.getDonations();
  }

submitForm(firstName: string, lastName: string, city: string, amount: number) {
  var newDonation: Donation = new Donation(firstName, lastName, city, amount);
  this.donationService.addDonation(newDonation);
}

}
