import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavigationDashboardComponent } from './top-navigation-dashboard.component';

describe('TopNavigationDashboardComponent', () => {
  let component: TopNavigationDashboardComponent;
  let fixture: ComponentFixture<TopNavigationDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavigationDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavigationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
