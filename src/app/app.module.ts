import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { LoggedHomePageComponent } from './logged-home-page/logged-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
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
