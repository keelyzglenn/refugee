import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { VolunteerService } from '../volunteer.service';
import { Volunteer } from '../volunteer.model';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-volunteer-detail',
  templateUrl: './volunteer-detail.component.html',
  styleUrls: ['./volunteer-detail.component.css'],
  providers: [VolunteerService]
})
export class VolunteerDetailComponent implements OnInit {
  volunteerId: string;
  volunteerToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private volunteerService: VolunteerService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.volunteerId = urlParameters['id'];
    });
    this.volunteerToDisplay = this.volunteerService.getVolunteerById(this.volunteerId);
    console.log(this.volunteerToDisplay.company);
  }

}
