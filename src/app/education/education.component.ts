import { Component, OnInit, ElementRef, AfterContentInit, Compiler} from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private _runtimeCompiler: Compiler){}
  ngOnInit() {
  }

}
