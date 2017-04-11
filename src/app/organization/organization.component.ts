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
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css'],
  providers: [RefugeeService]
})
export class OrganizationComponent implements OnInit {
  list: Organization[];
  organizations: FirebaseListObservable<any[]>;
  filterByCategory: string = "allCategories";
  currentRoute: string = this.router.url;

  constructor(private router: Router, private refugeeService: RefugeeService) { }

  ngOnInit() {
    this.organizations = this.refugeeService.getOrganizations();
  }


  onChange(optionFromMenu) {
    this.filterByCategory = optionFromMenu;
  }

  getData(){
   return this.refugeeService.getList();
 }

 goToDetailPage(clickedOrganization) {
   this.router.navigate(['organization', clickedOrganization.$key]);
 }


}
