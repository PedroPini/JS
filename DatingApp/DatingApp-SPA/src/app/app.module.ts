import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HttpClient } from 'selenium-webdriver/http';
import { NavComponent } from './nav/nav.component';
import { CpfComponent } from './cpf/cpf.component';
import { TextMaskModule } from 'angular2-text-mask';
import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      CpfComponent,
      RegisterComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      TextMaskModule,
      BsDropdownModule.forRoot()
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
