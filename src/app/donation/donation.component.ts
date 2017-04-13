import { Component, OnInit } from '@angular/core';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormsModule }   from '@angular/forms';

// import { FORM_DIRECTIVES } from '@angular/common';
// import { RadioControlValueAccessor } from './radio_value_accessor';


@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
  // directives: [FORM_DIRECTIVES, RadioControlValueAccessor],
  providers: [Ng2Bs3ModalModule,
            FormsModule]
})
export class DonationComponent implements OnInit {
  model;

  constructor() {
    this.model = {

    }
  }

  ngOnInit() {
  }

}
