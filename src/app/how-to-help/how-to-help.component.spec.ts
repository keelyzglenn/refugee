import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToHelpComponent } from './how-to-help.component';

describe('HowToHelpComponent', () => {
  let component: HowToHelpComponent;
  let fixture: ComponentFixture<HowToHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
