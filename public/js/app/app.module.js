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
var clients_component_1 = require('./clients/clients.component');
var client_creer_component_1 = require('./clients/client-creer.component');
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
                signup_component_1.SignupComponent, auth_component_1.AuthComponent, error_component_1.ErrorComponent, clients_component_1.ClientsComponent, client_creer_component_1.CreerClientComponent, client_list_component_1.ClientListComponent, nouvelles_component_1.NouvellesComponent,
                capitalize_pipe_1.CapitalizePipe],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routes_1.routing],
            bootstrap: [app_component_1.AppComponent],
            providers: [core_2.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }), auth_service_1.AuthService, error_service_1.ErrorService, client_service_1.ClientService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxpQ0FBK0IsMkJBQTJCLENBQUMsQ0FBQTtBQUMzRCxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSx1QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLDhCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pELGlDQUFnQywyQkFBMkIsQ0FBQyxDQUFBO0FBQzVELHNDQUE4QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQy9ELGdDQUErQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3pELCtCQUE4Qix3QkFBd0IsQ0FBQyxDQUFBO0FBRXZELDJCQUF3QixjQUFjLENBQUMsQ0FBQTtBQUV2QyxNQUFNO0FBQ04sK0JBQThCLHVCQUF1QixDQUFDLENBQUE7QUFDdEQsaUNBQWdDLHlCQUF5QixDQUFDLENBQUE7QUFDMUQsaUNBQWdDLHlCQUF5QixDQUFDLENBQUE7QUFDMUQsaUNBQWdDLHlCQUF5QixDQUFDLENBQUE7QUFDMUQsNkJBQTRCLHFCQUFxQixDQUFDLENBQUE7QUFFbEQsUUFBUTtBQUNSLGdDQUErQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQzFELDhCQUE2Qix3QkFBd0IsQ0FBQyxDQUFBO0FBRXRELFFBQVE7QUFDUixrQ0FBaUMsNkJBQTZCLENBQUMsQ0FBQTtBQUMvRCx1Q0FBcUMsa0NBQWtDLENBQUMsQ0FBQTtBQUN4RSxzQ0FBb0MsaUNBQWlDLENBQUMsQ0FBQTtBQUN0RSwrQkFBOEIsMEJBQTBCLENBQUMsQ0FBQTtBQUV6RCxPQUFPO0FBQ1AsZ0NBQStCLHlCQUF5QixDQUFDLENBQUE7QUFFekQsV0FBVztBQUNYLG9DQUFtQyw2QkFBNkIsQ0FBQyxDQUFBO0FBVWpFO0lBQUE7SUFBd0IsQ0FBQztJQVJ6QjtRQUFDLGVBQVEsQ0FBQztZQUNWLFlBQVksRUFBRSxDQUFDLDRCQUFZLEVBQUUsa0NBQWUsRUFBRSxxQ0FBYSxFQUFFLGdDQUFjLEVBQUUsOEJBQWEsRUFBRSxrQ0FBZSxFQUFFLGtDQUFlO2dCQUN4SCxrQ0FBZSxFQUFFLDhCQUFhLEVBQUUsZ0NBQWMsRUFBRSxvQ0FBZ0IsRUFBRSw2Q0FBb0IsRUFBRSwyQ0FBbUIsRUFBRSx3Q0FBa0I7Z0JBQy9ILGdDQUFjLENBQUM7WUFDbkIsT0FBTyxFQUFFLENBQUMsZ0NBQWEsRUFBRSxtQkFBVyxFQUFFLDJCQUFtQixFQUFFLGlCQUFVLEVBQUUsb0JBQU8sQ0FBQztZQUMvRSxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLGNBQU8sQ0FBQyx5QkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBb0IsRUFBQyxDQUFDLEVBQUUsMEJBQVcsRUFBRSw0QkFBWSxFQUFFLDhCQUFhLENBQUM7U0FDakgsQ0FBQzs7aUJBQUE7SUFDc0IsZ0JBQUM7QUFBRCxDQUF4QixBQUF5QixJQUFBO0FBQVosaUJBQVMsWUFBRyxDQUFBIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlICB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBwcm92aWRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9ICAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ29Db21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9oZWFkZXIubG9nby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vaG9tZS5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgcm91dGluZyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XHJcblxyXG4vL2F1dGhcclxuaW1wb3J0IHsgQXV0aENvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9hdXRoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9zaWduaW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9nb3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hdXRoL2xvZ291dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvc2lnbnVwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoL2F1dGguc2VydmljZSc7XHJcblxyXG4vL2Vycm9yc1xyXG5pbXBvcnQgeyBFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vZXJyb3JzL2Vycm9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4vZXJyb3JzL2Vycm9yLnNlcnZpY2UnO1xyXG5cclxuLy9jbGllbnRcclxuaW1wb3J0IHsgQ2xpZW50c0NvbXBvbmVudCB9IGZyb20gJy4vY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENyZWVyQ2xpZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jbGllbnRzL2NsaWVudC1jcmVlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbGllbnRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jbGllbnRzL2NsaWVudC1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENsaWVudFNlcnZpY2UgfSBmcm9tICcuL2NsaWVudHMvY2xpZW50LnNlcnZpY2UnO1xyXG5cclxuLy9waXBlc1xyXG5pbXBvcnQgeyBDYXBpdGFsaXplUGlwZSB9IGZyb20gJy4vcGlwZXMvY2FwaXRhbGl6ZS5waXBlJztcclxuXHJcbi8vbm91dmVsbGVzXHJcbmltcG9ydCB7IE5vdXZlbGxlc0NvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbm91dmVsbGVzLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5kZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsIEhlYWRlckNvbXBvbmVudCwgTG9nb0NvbXBvbmVudCwgTG9naW5Db21wb25lbnQsIEhvbWVDb21wb25lbnQsIFNpZ25pbkNvbXBvbmVudCwgTG9nb3V0Q29tcG9uZW50LCBcclxuICAgIFNpZ251cENvbXBvbmVudCwgQXV0aENvbXBvbmVudCwgRXJyb3JDb21wb25lbnQsIENsaWVudHNDb21wb25lbnQsIENyZWVyQ2xpZW50Q29tcG9uZW50LCBDbGllbnRMaXN0Q29tcG9uZW50LCBOb3V2ZWxsZXNDb21wb25lbnQsXHJcbiAgICBDYXBpdGFsaXplUGlwZV0sIFxyXG5pbXBvcnRzOiBbQnJvd3Nlck1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIEh0dHBNb2R1bGUsIHJvdXRpbmddLFxyXG5ib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxyXG5wcm92aWRlcnM6IFtwcm92aWRlKExvY2F0aW9uU3RyYXRlZ3ksIHt1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3l9KSwgQXV0aFNlcnZpY2UsIEVycm9yU2VydmljZSwgQ2xpZW50U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4iXX0=
