import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityCardComponent } from './activity-card/activity-card.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { LoggedHomePageComponent } from './logged-home-page/logged-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityCardComponent,
    ProfileCardComponent,
    LoggedHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
