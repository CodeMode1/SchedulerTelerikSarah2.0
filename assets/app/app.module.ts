import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { provide } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/header.logo.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './login/home.component';

import { routing } from './app.routes';

//auth
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin.component';
import { LogoutComponent } from './auth/logout.component';
import { SignupComponent } from './auth/signup.component';
import { AuthService } from './auth/auth.service';

//errors
import { ErrorComponent } from './errors/error.component';
import { ErrorService } from './errors/error.service';

//client
import { ClientComponent } from './clients/client.component';
import { ClientsComponent } from './clients/clients.component';
import { CreerClientComponent } from './clients/client-creer.component';
import { ClientWidgetsComponent } from './clients/client-widgets.component';
import { ClientListComponent } from './clients/client-list.component';
import { ClientService } from './clients/client.service';

//pipes
import { CapitalizePipe } from './pipes/capitalize.pipe';

//nouvelles
import { NouvellesComponent } from './login/nouvelles.component';

@NgModule({
declarations: [AppComponent, HeaderComponent, LogoComponent, LoginComponent, HomeComponent, SigninComponent, LogoutComponent, 
    SignupComponent, AuthComponent, ErrorComponent, ClientComponent, ClientsComponent, CreerClientComponent, ClientWidgetsComponent,
    ClientListComponent, NouvellesComponent, CapitalizePipe], 
imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, routing],
bootstrap: [AppComponent],
providers: [provide(LocationStrategy, {useClass: HashLocationStrategy}), AuthService, ErrorService, ClientService]
})
export class AppModule {}
