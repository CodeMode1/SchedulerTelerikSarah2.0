"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var core_2 = require('@angular/core');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var header_component_1 = require('./header/header.component');
var header_logo_component_1 = require('./header/header.logo.component');
var login_component_1 = require('./login/login.component');
var home_component_1 = require('./login/home.component');
var app_routes_1 = require('./app.routes');
//auth
var auth_component_1 = require('./auth/auth.component');
var signin_component_1 = require('./auth/signin.component');
var logout_component_1 = require('./auth/logout.component');
var signup_component_1 = require('./auth/signup.component');
var auth_service_1 = require('./auth/auth.service');
//errors
var error_component_1 = require('./errors/error.component');
var error_service_1 = require('./errors/error.service');
//client
var client_component_1 = require('./clients/client.component');
var clients_component_1 = require('./clients/clients.component');
var client_creer_component_1 = require('./clients/client-creer.component');
var client_widgets_component_1 = require('./clients/client-widgets.component');
var client_list_component_1 = require('./clients/client-list.component');
var client_service_1 = require('./clients/client.service');
//pipes
var capitalize_pipe_1 = require('./pipes/capitalize.pipe');
//nouvelles
var nouvelles_component_1 = require('./login/nouvelles.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, header_logo_component_1.LogoComponent, login_component_1.LoginComponent, home_component_1.HomeComponent, signin_component_1.SigninComponent, logout_component_1.LogoutComponent,
                signup_component_1.SignupComponent, auth_component_1.AuthComponent, error_component_1.ErrorComponent, client_component_1.ClientComponent, clients_component_1.ClientsComponent, client_creer_component_1.CreerClientComponent, client_widgets_component_1.ClientWidgetsComponent,
                client_list_component_1.ClientListComponent, nouvelles_component_1.NouvellesComponent, capitalize_pipe_1.CapitalizePipe],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routes_1.routing],
            bootstrap: [app_component_1.AppComponent],
            providers: [core_2.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }), auth_service_1.AuthService, error_service_1.ErrorService, client_service_1.ClientService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxpQ0FBK0IsMkJBQTJCLENBQUMsQ0FBQTtBQUMzRCxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSx1QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLDhCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pELGlDQUFnQywyQkFBMkIsQ0FBQyxDQUFBO0FBQzVELHNDQUE4QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQy9ELGdDQUErQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3pELCtCQUE4Qix3QkFBd0IsQ0FBQyxDQUFBO0FBRXZELDJCQUF3QixjQUFjLENBQUMsQ0FBQTtBQUV2QyxNQUFNO0FBQ04sK0JBQThCLHVCQUF1QixDQUFDLENBQUE7QUFDdEQsaUNBQWdDLHlCQUF5QixDQUFDLENBQUE7QUFDMUQsaUNBQWdDLHlCQUF5QixDQUFDLENBQUE7QUFDMUQsaUNBQWdDLHlCQUF5QixDQUFDLENBQUE7QUFDMUQsNkJBQTRCLHFCQUFxQixDQUFDLENBQUE7QUFFbEQsUUFBUTtBQUNSLGdDQUErQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQzFELDhCQUE2Qix3QkFBd0IsQ0FBQyxDQUFBO0FBRXRELFFBQVE7QUFDUixpQ0FBZ0MsNEJBQTRCLENBQUMsQ0FBQTtBQUM3RCxrQ0FBaUMsNkJBQTZCLENBQUMsQ0FBQTtBQUMvRCx1Q0FBcUMsa0NBQWtDLENBQUMsQ0FBQTtBQUN4RSx5Q0FBdUMsb0NBQW9DLENBQUMsQ0FBQTtBQUM1RSxzQ0FBb0MsaUNBQWlDLENBQUMsQ0FBQTtBQUN0RSwrQkFBOEIsMEJBQTBCLENBQUMsQ0FBQTtBQUV6RCxPQUFPO0FBQ1AsZ0NBQStCLHlCQUF5QixDQUFDLENBQUE7QUFFekQsV0FBVztBQUNYLG9DQUFtQyw2QkFBNkIsQ0FBQyxDQUFBO0FBVWpFO0lBQUE7SUFBd0IsQ0FBQztJQVJ6QjtRQUFDLGVBQVEsQ0FBQztZQUNWLFlBQVksRUFBRSxDQUFDLDRCQUFZLEVBQUUsa0NBQWUsRUFBRSxxQ0FBYSxFQUFFLGdDQUFjLEVBQUUsOEJBQWEsRUFBRSxrQ0FBZSxFQUFFLGtDQUFlO2dCQUN4SCxrQ0FBZSxFQUFFLDhCQUFhLEVBQUUsZ0NBQWMsRUFBRSxrQ0FBZSxFQUFFLG9DQUFnQixFQUFFLDZDQUFvQixFQUFFLGlEQUFzQjtnQkFDL0gsMkNBQW1CLEVBQUUsd0NBQWtCLEVBQUUsZ0NBQWMsQ0FBQztZQUM1RCxPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxFQUFFLG1CQUFXLEVBQUUsMkJBQW1CLEVBQUUsaUJBQVUsRUFBRSxvQkFBTyxDQUFDO1lBQy9FLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsU0FBUyxFQUFFLENBQUMsY0FBTyxDQUFDLHlCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLDZCQUFvQixFQUFDLENBQUMsRUFBRSwwQkFBVyxFQUFFLDRCQUFZLEVBQUUsOEJBQWEsQ0FBQztTQUNqSCxDQUFDOztpQkFBQTtJQUNzQixnQkFBQztBQUFELENBQXhCLEFBQXlCLElBQUE7QUFBWixpQkFBUyxZQUFHLENBQUEiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IHByb3ZpZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gICBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9nb0NvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2hlYWRlci5sb2dvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9ob21lLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyByb3V0aW5nIH0gZnJvbSAnLi9hcHAucm91dGVzJztcclxuXHJcbi8vYXV0aFxyXG5pbXBvcnQgeyBBdXRoQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoL2F1dGguY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2lnbmluQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoL3NpZ25pbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dvdXRDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvbG9nb3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNpZ251cENvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9zaWdudXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGgvYXV0aC5zZXJ2aWNlJztcclxuXHJcbi8vZXJyb3JzXHJcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9lcnJvcnMvZXJyb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi9lcnJvcnMvZXJyb3Iuc2VydmljZSc7XHJcblxyXG4vL2NsaWVudFxyXG5pbXBvcnQgeyBDbGllbnRDb21wb25lbnQgfSBmcm9tICcuL2NsaWVudHMvY2xpZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENsaWVudHNDb21wb25lbnQgfSBmcm9tICcuL2NsaWVudHMvY2xpZW50cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDcmVlckNsaWVudENvbXBvbmVudCB9IGZyb20gJy4vY2xpZW50cy9jbGllbnQtY3JlZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2xpZW50V2lkZ2V0c0NvbXBvbmVudCB9IGZyb20gJy4vY2xpZW50cy9jbGllbnQtd2lkZ2V0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbGllbnRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jbGllbnRzL2NsaWVudC1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENsaWVudFNlcnZpY2UgfSBmcm9tICcuL2NsaWVudHMvY2xpZW50LnNlcnZpY2UnO1xyXG5cclxuLy9waXBlc1xyXG5pbXBvcnQgeyBDYXBpdGFsaXplUGlwZSB9IGZyb20gJy4vcGlwZXMvY2FwaXRhbGl6ZS5waXBlJztcclxuXHJcbi8vbm91dmVsbGVzXHJcbmltcG9ydCB7IE5vdXZlbGxlc0NvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbm91dmVsbGVzLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5kZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsIEhlYWRlckNvbXBvbmVudCwgTG9nb0NvbXBvbmVudCwgTG9naW5Db21wb25lbnQsIEhvbWVDb21wb25lbnQsIFNpZ25pbkNvbXBvbmVudCwgTG9nb3V0Q29tcG9uZW50LCBcclxuICAgIFNpZ251cENvbXBvbmVudCwgQXV0aENvbXBvbmVudCwgRXJyb3JDb21wb25lbnQsIENsaWVudENvbXBvbmVudCwgQ2xpZW50c0NvbXBvbmVudCwgQ3JlZXJDbGllbnRDb21wb25lbnQsIENsaWVudFdpZGdldHNDb21wb25lbnQsXHJcbiAgICBDbGllbnRMaXN0Q29tcG9uZW50LCBOb3V2ZWxsZXNDb21wb25lbnQsIENhcGl0YWxpemVQaXBlXSwgXHJcbmltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgSHR0cE1vZHVsZSwgcm91dGluZ10sXHJcbmJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbnByb3ZpZGVyczogW3Byb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwge3VzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneX0pLCBBdXRoU2VydmljZSwgRXJyb3JTZXJ2aWNlLCBDbGllbnRTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiJdfQ==
