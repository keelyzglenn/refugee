import { Component, OnInit, ElementRef, AfterContentInit, Compiler} from '@angular/core';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Angular2FontAwesomeModule]
})
export class AppComponent implements OnInit{
  constructor(private _runtimeCompiler: Compiler){}
  ngOnInit() {
    this._runtimeCompiler.clearCache();
  }

}
