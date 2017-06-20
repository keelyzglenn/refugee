import { Component, OnInit, ElementRef, AfterContentInit} from '@angular/core';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormsModule }   from '@angular/forms';
import { Donation } from '../donation.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
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

  constructor(private router: Router, private donationService: DonationService, private elementRef:ElementRef) {
    this.model = {
      }
  }

  ngOnInit() {
    this.donations = this.donationService.getDonations();
  }


  ngAfterViewInit() {
    var node2 = document.createElement('script');
      node2.src = "https://cdn.rawgit.com/minhchan11/javascript-files/master/jquery.creditCardValidator.js";
      node2.type = 'text/javascript';
      node2.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node2);

  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "https://cdn.rawgit.com/minhchan11/javascript-files/master/card-document.js";
  this.elementRef.nativeElement.appendChild(s);
  }


submitForm(firstName: string, lastName: string, city: string, amount: number) {
  var newDonation: Donation = new Donation(firstName, lastName, city, amount);
  this.donationService.addDonation(newDonation);
}

}
