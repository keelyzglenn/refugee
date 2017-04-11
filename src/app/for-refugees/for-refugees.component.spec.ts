import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForRefugeesComponent } from './for-refugees.component';

describe('ForRefugeesComponent', () => {
  let component: ForRefugeesComponent;
  let fixture: ComponentFixture<ForRefugeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForRefugeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForRefugeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
