import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { MasterModule } from './layouts/master/master.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpInterceptorInterceptor } from './interceptors/http-interceptor.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './shared/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { firebaseConfig } from 'src/environments/environment';
import { ToastrModule } from 'ngx-toastr';
import { MessagingService } from './messaging.service';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AsyncPipe } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EventsComponent } from './landing-page/events/events.component';
import { HomeComponent } from './landing-page/home/home.component';
import { OnlineClassPageComponent } from './landing-page/online-class-page/online-class-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    EventsComponent,
    HomeComponent,
    OnlineClassPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    MasterModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      progressBar: false,
      enableHtml: true,
      preventDuplicates: true,
    }),
    AngularFireMessagingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorInterceptor,
    multi: true
  }, MessagingService, AsyncPipe],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
