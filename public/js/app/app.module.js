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
//erreurs
var erreur_component_1 = require('./erreurs/erreur.component');
var erreur_service_1 = require('./erreurs/erreur.service');
//client
var clients_component_1 = require('./clients/clients.component');
var client_edit_component_1 = require('./clients/client-edit.component');
var client_list_component_1 = require('./clients/client-list.component');
var client_service_1 = require('./clients/client.service');
//pipes
var capitalize_pipe_1 = require('./pipes/capitalize.pipe');
var noClient_pipe_1 = require('./pipes/noClient.pipe');
//nouvelles
var nouvelles_component_1 = require('./login/nouvelles.component');
//evenements
var evenements_component_1 = require('./evenements/evenements.component');
var evenement_list_component_1 = require('./evenements/evenement-list.component');
var evenement_edit_component_1 = require('./evenements/evenement-edit.component');
var evenement_service_1 = require('./evenements/evenement.service');
//agenda
var agenda_component_1 = require('./agenda/agenda.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, header_logo_component_1.LogoComponent, login_component_1.LoginComponent, home_component_1.HomeComponent, signin_component_1.SigninComponent, logout_component_1.LogoutComponent,
                signup_component_1.SignupComponent, auth_component_1.AuthComponent, erreur_component_1.ErreurComponent, clients_component_1.ClientsComponent, client_edit_component_1.EditClientComponent, client_list_component_1.ClientListComponent, nouvelles_component_1.NouvellesComponent,
                capitalize_pipe_1.CapitalizePipe, noClient_pipe_1.NoClientPipe, evenements_component_1.EvenementsComponent, evenement_list_component_1.EvenementListComponent, evenement_edit_component_1.EvenementEditComponent, agenda_component_1.AgendaComponent],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routes_1.routing],
            bootstrap: [app_component_1.AppComponent],
            providers: [core_2.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }), auth_service_1.AuthService, erreur_service_1.ErreurService, client_service_1.ClientService, evenement_service_1.EvenementService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxpQ0FBK0IsMkJBQTJCLENBQUMsQ0FBQTtBQUMzRCxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSx1QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLDhCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pELGlDQUFnQywyQkFBMkIsQ0FBQyxDQUFBO0FBQzVELHNDQUE4QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQy9ELGdDQUErQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3pELCtCQUE4Qix3QkFBd0IsQ0FBQyxDQUFBO0FBRXZELDJCQUF3QixjQUFjLENBQUMsQ0FBQTtBQUV2QyxNQUFNO0FBQ04sK0JBQThCLHVCQUF1QixDQUFDLENBQUE7QUFDdEQsaUNBQWdDLHlCQUF5QixDQUFDLENBQUE7QUFDMUQsaUNBQWdDLHlCQUF5QixDQUFDLENBQUE7QUFDMUQsaUNBQWdDLHlCQUF5QixDQUFDLENBQUE7QUFDMUQsNkJBQTRCLHFCQUFxQixDQUFDLENBQUE7QUFFbEQsU0FBUztBQUNULGlDQUFnQyw0QkFBNEIsQ0FBQyxDQUFBO0FBQzdELCtCQUE4QiwwQkFBMEIsQ0FBQyxDQUFBO0FBRXpELFFBQVE7QUFDUixrQ0FBaUMsNkJBQTZCLENBQUMsQ0FBQTtBQUMvRCxzQ0FBb0MsaUNBQWlDLENBQUMsQ0FBQTtBQUN0RSxzQ0FBb0MsaUNBQWlDLENBQUMsQ0FBQTtBQUN0RSwrQkFBOEIsMEJBQTBCLENBQUMsQ0FBQTtBQUV6RCxPQUFPO0FBQ1AsZ0NBQStCLHlCQUF5QixDQUFDLENBQUE7QUFDekQsOEJBQTZCLHVCQUF1QixDQUFDLENBQUE7QUFFckQsV0FBVztBQUNYLG9DQUFtQyw2QkFBNkIsQ0FBQyxDQUFBO0FBRWpFLFlBQVk7QUFDWixxQ0FBb0MsbUNBQW1DLENBQUMsQ0FBQTtBQUN4RSx5Q0FBdUMsdUNBQXVDLENBQUMsQ0FBQTtBQUMvRSx5Q0FBdUMsdUNBQXVDLENBQUMsQ0FBQTtBQUMvRSxrQ0FBaUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUVsRSxRQUFRO0FBQ1IsaUNBQWdDLDJCQUEyQixDQUFDLENBQUE7QUFVNUQ7SUFBQTtJQUF3QixDQUFDO0lBUnpCO1FBQUMsZUFBUSxDQUFDO1lBQ1YsWUFBWSxFQUFFLENBQUMsNEJBQVksRUFBRSxrQ0FBZSxFQUFFLHFDQUFhLEVBQUUsZ0NBQWMsRUFBRSw4QkFBYSxFQUFFLGtDQUFlLEVBQUUsa0NBQWU7Z0JBQ3hILGtDQUFlLEVBQUUsOEJBQWEsRUFBRSxrQ0FBZSxFQUFFLG9DQUFnQixFQUFFLDJDQUFtQixFQUFFLDJDQUFtQixFQUFFLHdDQUFrQjtnQkFDL0gsZ0NBQWMsRUFBRSw0QkFBWSxFQUFFLDBDQUFtQixFQUFFLGlEQUFzQixFQUFFLGlEQUFzQixFQUFFLGtDQUFlLENBQUM7WUFDdkgsT0FBTyxFQUFFLENBQUMsZ0NBQWEsRUFBRSxtQkFBVyxFQUFFLDJCQUFtQixFQUFFLGlCQUFVLEVBQUUsb0JBQU8sQ0FBQztZQUMvRSxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLGNBQU8sQ0FBQyx5QkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBb0IsRUFBQyxDQUFDLEVBQUUsMEJBQVcsRUFBRSw4QkFBYSxFQUFFLDhCQUFhLEVBQUUsb0NBQWdCLENBQUM7U0FDcEksQ0FBQzs7aUJBQUE7SUFDc0IsZ0JBQUM7QUFBRCxDQUF4QixBQUF5QixJQUFBO0FBQVosaUJBQVMsWUFBRyxDQUFBIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlICB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBwcm92aWRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9ICAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ29Db21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9oZWFkZXIubG9nby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vaG9tZS5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgcm91dGluZyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XHJcblxyXG4vL2F1dGhcclxuaW1wb3J0IHsgQXV0aENvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9hdXRoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9zaWduaW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9nb3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hdXRoL2xvZ291dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvc2lnbnVwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoL2F1dGguc2VydmljZSc7XHJcblxyXG4vL2VycmV1cnNcclxuaW1wb3J0IHsgRXJyZXVyQ29tcG9uZW50IH0gZnJvbSAnLi9lcnJldXJzL2VycmV1ci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFcnJldXJTZXJ2aWNlIH0gZnJvbSAnLi9lcnJldXJzL2VycmV1ci5zZXJ2aWNlJztcclxuXHJcbi8vY2xpZW50XHJcbmltcG9ydCB7IENsaWVudHNDb21wb25lbnQgfSBmcm9tICcuL2NsaWVudHMvY2xpZW50cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0Q2xpZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jbGllbnRzL2NsaWVudC1lZGl0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENsaWVudExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NsaWVudHMvY2xpZW50LWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2xpZW50U2VydmljZSB9IGZyb20gJy4vY2xpZW50cy9jbGllbnQuc2VydmljZSc7XHJcblxyXG4vL3BpcGVzXHJcbmltcG9ydCB7IENhcGl0YWxpemVQaXBlIH0gZnJvbSAnLi9waXBlcy9jYXBpdGFsaXplLnBpcGUnO1xyXG5pbXBvcnQgeyBOb0NsaWVudFBpcGUgfSBmcm9tICcuL3BpcGVzL25vQ2xpZW50LnBpcGUnO1xyXG5cclxuLy9ub3V2ZWxsZXNcclxuaW1wb3J0IHsgTm91dmVsbGVzQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9ub3V2ZWxsZXMuY29tcG9uZW50JztcclxuXHJcbi8vZXZlbmVtZW50c1xyXG5pbXBvcnQgeyBFdmVuZW1lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9ldmVuZW1lbnRzL2V2ZW5lbWVudHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXZlbmVtZW50TGlzdENvbXBvbmVudCB9IGZyb20gJy4vZXZlbmVtZW50cy9ldmVuZW1lbnQtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFdmVuZW1lbnRFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9ldmVuZW1lbnRzL2V2ZW5lbWVudC1lZGl0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEV2ZW5lbWVudFNlcnZpY2UgfSBmcm9tICcuL2V2ZW5lbWVudHMvZXZlbmVtZW50LnNlcnZpY2UnO1xyXG5cclxuLy9hZ2VuZGFcclxuaW1wb3J0IHsgQWdlbmRhQ29tcG9uZW50IH0gZnJvbSAnLi9hZ2VuZGEvYWdlbmRhLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5kZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsIEhlYWRlckNvbXBvbmVudCwgTG9nb0NvbXBvbmVudCwgTG9naW5Db21wb25lbnQsIEhvbWVDb21wb25lbnQsIFNpZ25pbkNvbXBvbmVudCwgTG9nb3V0Q29tcG9uZW50LCBcclxuICAgIFNpZ251cENvbXBvbmVudCwgQXV0aENvbXBvbmVudCwgRXJyZXVyQ29tcG9uZW50LCBDbGllbnRzQ29tcG9uZW50LCBFZGl0Q2xpZW50Q29tcG9uZW50LCBDbGllbnRMaXN0Q29tcG9uZW50LCBOb3V2ZWxsZXNDb21wb25lbnQsXHJcbiAgICBDYXBpdGFsaXplUGlwZSwgTm9DbGllbnRQaXBlLCBFdmVuZW1lbnRzQ29tcG9uZW50LCBFdmVuZW1lbnRMaXN0Q29tcG9uZW50LCBFdmVuZW1lbnRFZGl0Q29tcG9uZW50LCBBZ2VuZGFDb21wb25lbnRdLCBcclxuaW1wb3J0czogW0Jyb3dzZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBIdHRwTW9kdWxlLCByb3V0aW5nXSxcclxuYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcclxucHJvdmlkZXJzOiBbcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7dXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fSksIEF1dGhTZXJ2aWNlLCBFcnJldXJTZXJ2aWNlLCBDbGllbnRTZXJ2aWNlLCBFdmVuZW1lbnRTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiJdfQ==
