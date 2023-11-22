import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AuthRoutingModule } from './auth/auth-routing.module';
import { DynamicLoginFormComponent } from './auth/dynamic-login-form/dynamic-login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicLoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AuthRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
