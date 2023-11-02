import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationDashboardComponent } from './top-navigation-dashboard/top-navigation-dashboard.component';
import { LeftNavigationDashboardComponent } from './left-navigation-dashboard/left-navigation-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationDashboardComponent,
    LeftNavigationDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
