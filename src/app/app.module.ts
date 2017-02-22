import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { routingModule } from './app.routing';
import { MaterialModule } from '@angular/material';
import { APP_GUARDS } from './app.guard';
import {AuthService} from './services/auth.service';
import { AngularFire } from 'angularfire2';
import { AngularFireModule } from 'angularfire2';
import {AppConfig} from './app.config';

const SERVICE_PROVIDERS = [
  AuthService  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routingModule,
    MaterialModule,
    AngularFireModule.initializeApp(AppConfig.myFirebaseConfig, AppConfig.myFirebaseAuthConfig)
  ],
  providers: [APP_GUARDS, SERVICE_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule { }
