import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

import { HomePageComponent } from './home/home-page/home-page.component';
import { MorningTripComponent } from './home/schedules/morning-trip/morning-trip.component';
import { EveningTripComponent } from './home/schedules/evening-trip/evening-trip.component';
import { BookRideFormComponent } from './forms/book-ride-form/book-ride-form.component';
import { BookRideDialogComponent } from './dialogs/book-ride-dialog/book-ride-dialog.component';

import { AuthService } from './services/auth-service.service';

import { environment } from '../environments/environment';
import { RidesService } from './services/rides.service';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { RoutesService } from './services/routes/routes.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    MorningTripComponent,
    EveningTripComponent,
    BookRideFormComponent,
    BookRideDialogComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule ,
    AppRoutingModule,
    RouterModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
    
  ],
  providers: [RidesService, AuthService,
              RoutesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
