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
    ClientListComponent.prototype.eventModal = function () {
        this.titreModal = "Suppression";
    };
    ClientListComponent.prototype.clientSelect = function (client) {
        this.confirmImp = false;
        this.clientSelected = client;
        console.log(this.clientSelected);
        console.log(this.clientSelected.noClient);
        this.noClient = this.clientSelected.noClient;
        //console.log("id mongo : " + this.clientSelected.clientId);
    };
    ClientListComponent.prototype.onDelete = function () {
        var _this = this;
        if (this.clientSelected !== null) {
            this._clientService.deleteClient(this.clientSelected)
                .subscribe(function (data) { return console.log(data); }, function (error) { return _this._erreurService.handleErreur(error); });
        }
        this.confirmImp = true;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMvY2xpZW50LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFDakQsK0JBQThCLDJCQUEyQixDQUFDLENBQUE7QUF5RTFEO0lBUUksNkJBQW9CLGNBQTZCLEVBQVUsY0FBNkI7UUFBcEUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQVB4RixVQUFLLEdBQVcsbUJBQW1CLENBQUM7SUFRcEMsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFBQSxpQkFZQztRQVhHLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQ3RDLFVBQUEsSUFBSTtZQUNBLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLFlBQVk7WUFDWixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7Z0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLENBQUM7UUFDTCxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBdkMsQ0FBdUMsQ0FDbkQsQ0FBQztJQUNOLENBQUM7SUFFRCx3Q0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRSxhQUFhLENBQUM7SUFDbkMsQ0FBQztJQUVELDBDQUFZLEdBQVosVUFBYSxNQUFjO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO1FBQzdDLDREQUE0RDtJQUNoRSxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7aUJBQ2hELFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQXZDLENBQXVDLENBQ25ELENBQUM7UUFDVixDQUFDO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQXJITDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLE1BQU0sRUFBRSxDQUFDLDJuQ0FnRVIsQ0FBQztTQUNMLENBQUM7OzJCQUFBO0lBaURGLDBCQUFDO0FBQUQsQ0FoREEsQUFnREMsSUFBQTtBQWhEWSwyQkFBbUIsc0JBZ0QvQixDQUFBIiwiZmlsZSI6ImNsaWVudHMvY2xpZW50LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnLi9jbGllbnQnO1xyXG5pbXBvcnQgeyBDbGllbnRTZXJ2aWNlIH0gZnJvbSAnLi9jbGllbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEVycmV1clNlcnZpY2UgfSBmcm9tICcuLi9lcnJldXJzL2VycmV1ci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2FwaXRhbGl6ZVBpcGUgfSBmcm9tICcuLi9waXBlcy9jYXBpdGFsaXplLnBpcGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdteS1jbGllbnQtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NsaWVudC1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICBzZWN0aW9ue1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyJSAwIDAgMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRkLCB0aHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDF2dztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgze1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjUlIDAgMC41JSAwO1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wYW5lbC1oZWFkaW5ne1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iZy1kYW5nZXJ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNDQzAwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3NlYXJjaExhYmVse1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaXple1xyXG4gICAgICAgICAgICBmb250LXNpemU6MXZ3O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzN2FiNztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC53aWRnZXRze1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3NwZWNpYWxTZWFyY2h7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGl2Rm9vdGVye1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb2wtbWQtMTIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENsaWVudExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgdGl0cmU6IHN0cmluZyA9IFwiTGlzdGUgZGVzIENsaWVudHNcIjtcclxuICAgIGNsaWVudHM6IENsaWVudFtdO1xyXG4gICAgY2xpZW50U2VsZWN0ZWQ6IENsaWVudDtcclxuICAgIG5vQ2xpZW50OiBudW1iZXI7XHJcbiAgICB0aXRyZU1vZGFsOiBzdHJpbmc7XHJcbiAgICBjb25maXJtSW1wOiBib29sZWFuO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jbGllbnRTZXJ2aWNlOiBDbGllbnRTZXJ2aWNlLCBwcml2YXRlIF9lcnJldXJTZXJ2aWNlOiBFcnJldXJTZXJ2aWNlKSB7IFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYW5zIG9uIGluaXQnKTtcclxuICAgICAgICB0aGlzLl9jbGllbnRTZXJ2aWNlLmdldENsaWVudHMoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnRzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIC8vcHJpbnQgZGF0YVxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGkgPCB0aGlzLmNsaWVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2xpZW50c1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2VycmV1clNlcnZpY2UuaGFuZGxlRXJyZXVyKGVycm9yKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRNb2RhbCgpe1xyXG4gICAgICAgIHRoaXMudGl0cmVNb2RhbD0gXCJTdXBwcmVzc2lvblwiOyBcclxuICAgIH1cclxuXHJcbiAgICBjbGllbnRTZWxlY3QoY2xpZW50OiBDbGllbnQpe1xyXG4gICAgICAgIHRoaXMuY29uZmlybUltcCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2xpZW50U2VsZWN0ZWQgPSBjbGllbnQ7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jbGllbnRTZWxlY3RlZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jbGllbnRTZWxlY3RlZC5ub0NsaWVudCk7XHJcbiAgICAgICAgdGhpcy5ub0NsaWVudCA9IHRoaXMuY2xpZW50U2VsZWN0ZWQubm9DbGllbnQ7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImlkIG1vbmdvIDogXCIgKyB0aGlzLmNsaWVudFNlbGVjdGVkLmNsaWVudElkKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlbGV0ZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuY2xpZW50U2VsZWN0ZWQgIT09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLl9jbGllbnRTZXJ2aWNlLmRlbGV0ZUNsaWVudCh0aGlzLmNsaWVudFNlbGVjdGVkKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2VycmV1clNlcnZpY2UuaGFuZGxlRXJyZXVyKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25maXJtSW1wID0gdHJ1ZTtcclxuICAgIH1cclxufSJdfQ==
