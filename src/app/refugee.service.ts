import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Organization } from './organization.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class RefugeeService {
  organizations: FirebaseListObservable<any[]>;

  constructor (private http: Http,
              private angularFire: AngularFireDatabase) {
                this.organizations = angularFire.list('organizations');
              }

  private urlPath = '	http://data.unhcr.org/api/whos_doing_what_where/countries.json?instance_id=syria';

  getList() {
    return this.http.get(this.urlPath)
    .map((res:Response) => res.json())
    .subscribe(data => {
      var allOrg = data[0].whos_doing_what_where;
      console.log(data[0]);
      allOrg.forEach(organization => {
        // console.log(organization);
        // var newOrganization = new Organization(organization.sector_name_en,organization.organization_acronym, organization.organization_url);
        // this.organizations.push(newOrganization);
      });
    });
    }

  getOrganizations() {
    return this.organizations;
  }

  getOrganizationById(organizationId: string) {
    return this.angularFire.object('organizations/' + organizationId);
  }

}
