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
var client_service_1 = require('./client.service');
var erreur_service_1 = require('../erreurs/erreur.service');
var ClientListComponent = (function () {
    function ClientListComponent(_clientService, _erreurService) {
        this._clientService = _clientService;
        this._erreurService = _erreurService;
        this.titre = "Liste des Clients";
    }
    ClientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('dans on init');
        this._clientService.getClients().subscribe(function (data) {
            _this.clients = data;
            //print data
            for (var i = 0; i < _this.clients.length; i++) {
                console.log(_this.clients[i]);
            }
        }, function (error) { return _this._erreurService.handleErreur(error); });
    };
    ClientListComponent.prototype.clientSelect = function (client) {
        this.clientSelected = client;
        console.log(this.clientSelected);
        console.log(this.clientSelected.noClient);
        this.clientId = this.clientSelected.noClient;
        //console.log("id mongo : " + this.clientSelected.clientId);
    };
    ClientListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-client-list',
            templateUrl: 'client-list.component.html',
            styles: ["\n        section{\n            padding: 2% 0 0 0;\n        }\n\n        td, th{\n            text-align:left;\n            font-size: 1vw;\n        }\n\n        h3{\n            padding: 0.5% 0 0.5% 0;\n            margin:0;\n            font-size: 1.5vw;\n        }\n\n        .panel-heading{\n            text-align:center;\n        }\n\n        .bg-danger{\n            text-align: center;\n            color: #CC0000;\n            font-weight: bolder;\n            font-size: 1vw;\n        }\n\n        #searchLabel{\n            margin-bottom:0;\n            text-align:left;\n        }\n\n        .size{\n            font-size:1vw;\n            text-align:center;\n        }\n\n        a{\n            color: #000;\n            display: block;\n            clear: both;\n        }\n\n        a:hover{\n            color: #337ab7;\n        }\n\n        .widgets{\n            display: inline-block;\n            padding-right: 5%;\n        }\n\n        #specialSearch{\n            padding: 0;\n        }\n\n        .divFooter{\n            text-align:center;\n        }\n\n        .col-md-12 {\n            padding: 2%;\n        }\n\n    "]
        }), 
        __metadata('design:paramtypes', [client_service_1.ClientService, erreur_service_1.ErreurService])
    ], ClientListComponent);
    return ClientListComponent;
}());
exports.ClientListComponent = ClientListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMvY2xpZW50LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFDakQsK0JBQThCLDJCQUEyQixDQUFDLENBQUE7QUF5RTFEO0lBTUksNkJBQW9CLGNBQTZCLEVBQVUsY0FBNkI7UUFBcEUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUx4RixVQUFLLEdBQVcsbUJBQW1CLENBQUM7SUFLd0QsQ0FBQztJQUU3RixzQ0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFYRyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUN0QyxVQUFBLElBQUk7WUFDQSxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixZQUFZO1lBQ1osR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxDQUFDO1FBQ0wsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQXZDLENBQXVDLENBQ25ELENBQUM7SUFDTixDQUFDO0lBRUQsMENBQVksR0FBWixVQUFhLE1BQWM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7UUFDN0MsNERBQTREO0lBQ2hFLENBQUM7SUFsR0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxNQUFNLEVBQUUsQ0FBQywybkNBZ0VSLENBQUM7U0FDTCxDQUFDOzsyQkFBQTtJQThCRiwwQkFBQztBQUFELENBN0JBLEFBNkJDLElBQUE7QUE3QlksMkJBQW1CLHNCQTZCL0IsQ0FBQSIsImZpbGUiOiJjbGllbnRzL2NsaWVudC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENsaWVudCB9IGZyb20gJy4vY2xpZW50JztcclxuaW1wb3J0IHsgQ2xpZW50U2VydmljZSB9IGZyb20gJy4vY2xpZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJldXJTZXJ2aWNlIH0gZnJvbSAnLi4vZXJyZXVycy9lcnJldXIuc2VydmljZSc7XHJcbmltcG9ydCB7IENhcGl0YWxpemVQaXBlIH0gZnJvbSAnLi4vcGlwZXMvY2FwaXRhbGl6ZS5waXBlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbXktY2xpZW50LWxpc3QnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdjbGllbnQtbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgc2VjdGlvbntcclxuICAgICAgICAgICAgcGFkZGluZzogMiUgMCAwIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZCwgdGh7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgcGFkZGluZzogMC41JSAwIDAuNSUgMDtcclxuICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucGFuZWwtaGVhZGluZ3tcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmctZGFuZ2Vye1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjQ0MwMDAwO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDF2dztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNzZWFyY2hMYWJlbHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOjF2dztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICMzMzdhYjc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAud2lkZ2V0c3tcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNzcGVjaWFsU2VhcmNoe1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRpdkZvb3RlcntcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29sLW1kLTEyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMiU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbGllbnRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHRpdHJlOiBzdHJpbmcgPSBcIkxpc3RlIGRlcyBDbGllbnRzXCI7XHJcbiAgICBjbGllbnRzOiBDbGllbnRbXTtcclxuICAgIGNsaWVudFNlbGVjdGVkOiBDbGllbnQ7XHJcbiAgICBjbGllbnRJZDogbnVtYmVyO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jbGllbnRTZXJ2aWNlOiBDbGllbnRTZXJ2aWNlLCBwcml2YXRlIF9lcnJldXJTZXJ2aWNlOiBFcnJldXJTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGFucyBvbiBpbml0Jyk7XHJcbiAgICAgICAgdGhpcy5fY2xpZW50U2VydmljZS5nZXRDbGllbnRzKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50cyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAvL3ByaW50IGRhdGFcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpIDwgdGhpcy5jbGllbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNsaWVudHNbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJldXJTZXJ2aWNlLmhhbmRsZUVycmV1cihlcnJvcilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWVudFNlbGVjdChjbGllbnQ6IENsaWVudCl7XHJcbiAgICAgICAgdGhpcy5jbGllbnRTZWxlY3RlZCA9IGNsaWVudDtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNsaWVudFNlbGVjdGVkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNsaWVudFNlbGVjdGVkLm5vQ2xpZW50KTtcclxuICAgICAgICB0aGlzLmNsaWVudElkID0gdGhpcy5jbGllbnRTZWxlY3RlZC5ub0NsaWVudDtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaWQgbW9uZ28gOiBcIiArIHRoaXMuY2xpZW50U2VsZWN0ZWQuY2xpZW50SWQpO1xyXG4gICAgfVxyXG59Il19
