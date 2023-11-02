import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavigationDashboardComponent } from './left-navigation-dashboard.component';

describe('LeftNavigationDashboardComponent', () => {
  let component: LeftNavigationDashboardComponent;
  let fixture: ComponentFixture<LeftNavigationDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftNavigationDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavigationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
