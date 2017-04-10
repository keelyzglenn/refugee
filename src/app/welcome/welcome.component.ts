import { Component, OnInit } from '@angular/core';
import { Organization } from '../organization.model';
import { Router } from '@angular/router';
import { RefugeeService } from '../refugee.service';
import {Observable} from 'rxjs/Rx';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [RefugeeService]
})
export class WelcomeComponent implements OnInit {
  list: Organization[];
  organizations: FirebaseListObservable<any[]>;

  constructor(private router: Router, private refugeeService: RefugeeService) { }

  ngOnInit() {


  }

  filterByCategory: string = "allCategories";

  onChange(optionFromMenu) {
    this.filterByCategory = optionFromMenu;
  }

  getData(){
   return this.refugeeService.getList();
  }
}
