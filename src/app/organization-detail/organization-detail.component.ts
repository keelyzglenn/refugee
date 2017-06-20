import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Organization } from '../organization.model';
import { RefugeeService } from '../refugee.service';

@Component({
  selector: 'app-organization-detail',
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.css'],
  providers: [RefugeeService]
})
export class OrganizationDetailComponent implements OnInit {

  organizationId: string
  organizationToDisplay;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private refugeeService: RefugeeService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.organizationId = urlParameters['id'];
    })
    this.organizationToDisplay = this.refugeeService.getOrganizationById(this.organizationId);
  }

}
