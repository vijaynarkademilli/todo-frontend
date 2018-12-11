import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from "./app-routing.module";
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { HeaderComponent } from './header/header.component';
import { FotterComponent } from './fotter/fotter.component';
import {HardcodedAuthenticationService} from "./service/hardcoded-authentication.service";
import { LogoutComponent } from './logout/logout.component';
import {RouteGaurdService} from "./service/route-gaurd.service";
import {WelcomeDataServiceService} from "./service/data/welcome-data-service";
import {HttpClientModule} from '@angular/common/http';
import {TodoService} from "./service/data/todo.service";
import { TodoComponent } from './todo/todo.component';
import {HttpIntercepterBasicAuthServiceService} from "./service/http/http-intercepter-basic-auth-service.service";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {BasicAuthService} from "./service/basic-auth.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    HeaderComponent,
    FotterComponent,
    LogoutComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HardcodedAuthenticationService,
    RouteGaurdService,
    WelcomeDataServiceService,
    TodoService,
    BasicAuthService,
    {provide: HTTP_INTERCEPTORS,useClass: HttpIntercepterBasicAuthServiceService,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
