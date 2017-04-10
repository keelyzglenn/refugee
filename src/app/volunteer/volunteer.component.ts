import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Volunteer } from '../volunteer.model';
import { VolunteerService } from '../volunteer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css'],
  providers: [VolunteerService]
})
export class VolunteerComponent implements OnInit {

  volunteers: FirebaseListObservable<any[]>;


  constructor(private router: Router, private volunteerService: VolunteerService) { }

  ngOnInit() {
    this.volunteers = this.volunteerService.getVolunteers();
  }

}
