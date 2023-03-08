import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { FlexModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NewTrainingComponent } from './components/training/new-training/new-training.component';
import { PastTrainingComponent } from './components/training/past-training/past-training.component';
import { CurrentTrainingComponent } from './components/training/current-training/current-training.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TrainingComponent } from './components/training/training.component';
import { StopTrainingComponent } from './components/training/stop-training/stop-training.component';
import { AuthService } from './auth/auth-service';
import { ExerciseService } from './components/training/exercise.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    SidenavListComponent,
    TrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    CurrentTrainingComponent,
    StopTrainingComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexModule,
  ],
  providers: [AuthService, ExerciseService],
  bootstrap: [AppComponent],
  entryComponents:[StopTrainingComponent]
})
export class AppModule { }
