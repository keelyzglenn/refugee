import { Component, OnInit, ElementRef, AfterContentInit } from '@angular/core';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
  providers: [Ng2Bs3ModalModule,
            FormsModule]
})
export class DonationComponent implements OnInit {

  loadScript() {
         let script1 = document.createElement('script');
         script1.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.13.1/jquery.validate.min.js";
         script1.type = 'text/javascript';
         script1.charset = 'utf-8';
         document.getElementsByTagName('head')[0].appendChild(script1);
         let script2 = document.createElement('script');
         script2.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery.payment/1.2.3/jquery.payment.min.js";
         script2.type = 'text/javascript';
         script2.charset = 'utf-8';
         document.getElementsByTagName('head')[0].appendChild(script2);
         let script3 = document.createElement('script');
         script3.src = "https://js.stripe.com/v2/";
         script3.type = 'text/javascript';
         script3.charset = 'utf-8';
         document.getElementsByTagName('head')[0].appendChild(script3);
         let script4 = document.createElement('script');
         script4.src = "https://cdn.rawgit.com/minhchan11/javascript-files/master/donation-script.js";
         script4.type = 'text/javascript';
         script4.charset = 'utf-8';
         document.getElementsByTagName('head')[0].appendChild(script4);
     }
  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.loadScript();
  }

}
