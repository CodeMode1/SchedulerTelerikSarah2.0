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
        this.noClientTextSearch = "";
        this.noClientFiltreList = "";
        this.boolSearchClient = false;
        this.erreurCodeClient = "";
        this.specialTextSearch = "";
        this.erreurSpecialSearch = "";
        this.boolFullSearch = false;
    }
    ClientListComponent.prototype.ngOnInit = function () {
        console.log('dans on init');
        this.getClients();
    };
    ClientListComponent.prototype.getClients = function () {
        var _this = this;
        this._clientService.getClients().subscribe(function (data) {
            _this.clients = data;
            //print données pour chaque client
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
    ClientListComponent.prototype.onSearchNoClient = function () {
        var _this = this;
        this.boolSearchClient = false;
        console.log("contenu input: ");
        console.log(this.noClientTextSearch);
        if (this.noClientTextSearch === null || (this.noClientTextSearch).toString() === "") {
            this.noClientFiltreList = "";
            return;
        }
        else if (isNaN(Number(this.noClientTextSearch))) {
            this.erreurCodeClient = "Invalide. Code Client doit être un nombre.";
            alert('pas un nombre');
            this.boolSearchClient = true;
            return;
        }
        else if (this.noClientTextSearch.toString().length > 10) {
            this.erreurCodeClient = "Invalide. Code Client dépasse la longueur acceptée.";
            alert('nombre trop gros');
            this.boolSearchClient = true;
            return;
        }
        this._clientService.getClient(Number(this.noClientTextSearch))
            .subscribe(function (data) {
            _this.noClientFiltreList = (data.noClient).toString();
            console.log(_this.noClientFiltreList);
        }, function (error) {
            alert('code client invalide');
            _this.boolSearchClient = true;
            _this._erreurService.handleErreur(error);
        });
    };
    ClientListComponent.prototype.onSpecialSearch = function () {
        var _this = this;
        this.boolFullSearch = false;
        if (this.specialTextSearch === null || (this.specialTextSearch).toString() === "") {
            this.getClients();
            return;
        }
        else if (this.specialTextSearch.toString().length > 150) {
            this.erreurSpecialSearch = "Invalide. Ne pas dépasser 150 caractères.";
            this.boolFullSearch = true;
            return;
        }
        this._clientService.getClientsSpecialSearch(this.specialTextSearch)
            .subscribe(function (data) {
            _this.clients = data;
            console.log(_this.clients);
        }, function (error) {
            alert('text search invalide');
            _this._erreurService.handleErreur(error);
        });
    };
    ClientListComponent.prototype.actualiser = function () {
        var _this = this;
        if (this.noClientTextSearch !== null && (this.noClientTextSearch).toString() !== "") {
            this._clientService.getClient(Number(this.noClientTextSearch))
                .subscribe(function (data) {
                _this.noClientFiltreList = (data.noClient).toString();
                console.log(_this.noClientFiltreList);
            }, function (error) {
                alert('code invalide');
                _this.boolSearchClient = true;
                _this._erreurService.handleErreur(error);
            });
            return;
        }
        else {
            this.noClientFiltreList = "";
            this.getClients();
        }
    };
    ClientListComponent.prototype.logInput = function (value) {
        console.log(value);
    };
    ClientListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-client-list',
            templateUrl: 'client-list.component.html',
            styles: ["\n        section{\n            padding: 2% 0 0 0;\n        }\n\n        td, th{\n            text-align: center;\n            font-size: 1vw;\n        }\n\n        thead > tr{\n            background-color: #fafafa;\n            border-bottom: 0.25em solid #1565c0;\n        }\n\n        tbody > tr:hover{\n            background-color: #a9d4f9;\n        }\n\n        tbody > tr{\n            border-bottom: 0.2em solid #ddd;\n        }\n\n        .estSelectRange{\n             background-color: #519BDB;\n         }\n\n        h3{\n            padding: 0.5% 0 0.5% 0;\n            margin:0;\n            font-size: 1.5vw;\n        }\n\n        .panel-heading{\n            text-align:center;\n        }\n\n        .bg-danger{\n            text-align: center;\n            color: #CC0000;\n            font-weight: bolder;\n            font-size: 1vw;\n        }\n\n        #searchLabel{\n            margin-bottom:0;\n            text-align:left;\n        }\n\n        #erreurCode{\n            text-align: center;\n            padding: 0 5% 0 0;\n        } \n\n        #erreurFullSearch {\n            clear: both;\n            float: left;\n        }\n\n        .size{\n            font-size:1vw;\n            text-align:center;\n        }\n\n        .disableA{\n            pointer-events: none;\n            cursor: default;\n            color: #ddd;\n        }\n\n        .erreurSearchClient, .erreurSpecialSearch{\n            background: #ff8080;\n        }\n\n        #boutonSearchNoClient{\n            background: #519BDB;\n        }\n\n        a{\n            color: #000;\n            display: block;\n            clear: both;\n            position: relative;\n        }\n\n        a span{\n            position: absolute;\n            display:none;\n            background: rgba(20, 20, 31, 0.84);\n            text-align: center;\n            border-left: 1px solid #111;\n            border-top: 1px solid #111;\n            border-right: 1px solid #333;\n            border-bottom: 1px solid #333;\n            border-radius: 3px;\n            color: #fff;\n            font-size: 0.7em;\n            text-indent: 0;\n            width: auto;\n            height:auto;\n        }\n\n        a span:after{\n            content: ' ';\n\t        height: 0;\n\t        position: absolute;\n\t        width: 0;\n            border: 10px solid transparent;\n\t        border-top-color: #333;\n            top: 100%;\n\t        left: 10px;\n        }\n\n        a:hover span{\n            display: block;\n            bottom: 1vw;\n            left:75%;\n            z-index: 9999;\n            -moz-animation: moveTooltip .25s linear;\n            -webkit-animation: moveTooltip .25s linear;\n        }\n\n        a:hover{\n            color: #337ab7;\n        }\n\n        .widgets{\n            display: inline-block;\n            padding-right: 5%;\n        }\n\n        #specialSearch{\n            padding: 0;\n        }\n\n        #boutonSpecialSearch{\n            clear: both;\n            float: left;\n            background: #519BDB;\n        }\n\n        .divFooter{\n            text-align:center;\n        }\n\n        .col-md-12 {\n            padding: 2%;\n        }\n\n        @-moz-keyframes moveTooltip {\n    0% {\n        -moz-transform: scale(0,0);\n        opacity: 0;\n    }\n\n    45% {\n        -moz-transform: scale(0.4,0.4);\n        opacity: 0.7;\n    }\n\n    75% {\n        -moz-transform: scale(1.3,1.3);\n        opacity: 0.4;\n    }\n\n    100% {\n        -moz-transform: scale(1,1);\n        opacity: 1;\n    };\n}\n\n@-webkit-keyframes moveTooltip {\n    0% {\n        -webkit-transform: scale(0,0);\n        opacity: 0;\n    }\n\n    45% {\n        -webkit-transform: scale(0.4,0.4);\n        opacity: 0.7;\n    }\n\n    75% {\n        -webkit-transform: scale(1.3,1.3);\n        opacity: 0.4;\n    }\n\n    100% {\n        -webkit-transform: scale(1,1);\n        opacity: 1;\n    };\n}\n\n    "]
        }), 
        __metadata('design:paramtypes', [client_service_1.ClientService, erreur_service_1.ErreurService])
    ], ClientListComponent);
    return ClientListComponent;
}());
exports.ClientListComponent = ClientListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMvY2xpZW50LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFHbEQsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFDakQsK0JBQThCLDJCQUEyQixDQUFDLENBQUE7QUEyTTFEO0lBaUJJLDZCQUFvQixjQUE2QixFQUFVLGNBQTZCO1FBQXBFLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDcEYsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQztRQUNqQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCx3Q0FBVSxHQUFWO1FBQUEsaUJBV0M7UUFWRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FDdEMsVUFBQSxJQUFJO1lBQ0EsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsa0NBQWtDO1lBQ2xDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztnQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsQ0FBQztRQUNMLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUF2QyxDQUF1QyxDQUNuRCxDQUFDO0lBQ04sQ0FBQztJQUVELHdDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFFLGFBQWEsQ0FBQztJQUNuQyxDQUFDO0lBRUQsMENBQVksR0FBWixVQUFhLE1BQWM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7UUFDN0MsNERBQTREO0lBQ2hFLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztpQkFDaEQsU0FBUyxDQUNOLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBdkMsQ0FBdUMsQ0FDbkQsQ0FBQztRQUNWLENBQUM7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsOENBQWdCLEdBQWhCO1FBQUEsaUJBZ0NDO1FBL0JHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDckMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGtCQUFrQixLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDaEYsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztZQUM3QixNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDNUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLDRDQUE0QyxDQUFDO1lBQ3JFLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzdCLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ3BELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxxREFBcUQsQ0FBQztZQUM5RSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzdCLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDekQsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM5QixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzNDLENBQUMsQ0FDSixDQUFDO0lBQ1YsQ0FBQztJQUVELDZDQUFlLEdBQWY7UUFBQSxpQkF1QkM7UUF0QkcsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGlCQUFpQixLQUFLLElBQUksSUFBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDL0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQSxDQUFDO1lBQ3BELElBQUksQ0FBQyxtQkFBbUIsR0FBRywyQ0FBMkMsQ0FBQztZQUN2RSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7YUFDOUQsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM5QixLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMzQyxDQUFDLENBQ0osQ0FBQztJQUVWLENBQUM7SUFFRCx3Q0FBVSxHQUFWO1FBQUEsaUJBb0JDO1FBbkJHLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ2hGLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztpQkFDN0QsU0FBUyxDQUNOLFVBQUEsSUFBSTtnQkFDQSxLQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDekMsQ0FBQyxFQUNELFVBQUEsS0FBSztnQkFDRCxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQzNDLENBQUMsQ0FDSixDQUFDO1lBQ0YsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQztJQUVMLENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQVMsS0FBSztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQWhXTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLE1BQU0sRUFBRSxDQUFDLDAySEFpTVIsQ0FBQztTQUNMLENBQUM7OzJCQUFBO0lBMkpGLDBCQUFDO0FBQUQsQ0ExSkEsQUEwSkMsSUFBQTtBQTFKWSwyQkFBbUIsc0JBMEovQixDQUFBIiwiZmlsZSI6ImNsaWVudHMvY2xpZW50LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENsaWVudCB9IGZyb20gJy4vY2xpZW50JztcclxuaW1wb3J0IHsgQ2xpZW50U2VydmljZSB9IGZyb20gJy4vY2xpZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJldXJTZXJ2aWNlIH0gZnJvbSAnLi4vZXJyZXVycy9lcnJldXIuc2VydmljZSc7XHJcbmltcG9ydCB7IENhcGl0YWxpemVQaXBlIH0gZnJvbSAnLi4vcGlwZXMvY2FwaXRhbGl6ZS5waXBlJztcclxuaW1wb3J0IHsgTm9DbGllbnRQaXBlIH0gZnJvbSAnLi4vcGlwZXMvbm9DbGllbnQucGlwZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ215LWNsaWVudC1saXN0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnY2xpZW50LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIHNlY3Rpb257XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIlIDAgMCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGQsIHRoe1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhlYWQgPiB0cntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4yNWVtIHNvbGlkICMxNTY1YzA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0Ym9keSA+IHRyOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTlkNGY5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGJvZHkgPiB0cntcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4yZW0gc29saWQgI2RkZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5lc3RTZWxlY3RSYW5nZXtcclxuICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTlCREI7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgaDN7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNSUgMCAwLjUlIDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBhbmVsLWhlYWRpbmd7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJnLWRhbmdlcntcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogI0NDMDAwMDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjc2VhcmNoTGFiZWx7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2VycmV1ckNvZGV7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMCA1JSAwIDA7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgI2VycmV1ckZ1bGxTZWFyY2gge1xyXG4gICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOjF2dztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGlzYWJsZUF7XHJcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmVycmV1clNlYXJjaENsaWVudCwgLmVycmV1clNwZWNpYWxTZWFyY2h7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjgwODA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjYm91dG9uU2VhcmNoTm9DbGllbnR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1MTlCREI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHNwYW57XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwLCAyMCwgMzEsIDAuODQpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzExMTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMxMTE7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICAgICAgICB0ZXh0LWluZGVudDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSBzcGFuOmFmdGVye1xyXG4gICAgICAgICAgICBjb250ZW50OiAnICc7XHJcblx0ICAgICAgICBoZWlnaHQ6IDA7XHJcblx0ICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdCAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzMzMztcclxuICAgICAgICAgICAgdG9wOiAxMDAlO1xyXG5cdCAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGE6aG92ZXIgc3BhbntcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMXZ3O1xyXG4gICAgICAgICAgICBsZWZ0Ojc1JTtcclxuICAgICAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICAgICAgLW1vei1hbmltYXRpb246IG1vdmVUb29sdGlwIC4yNXMgbGluZWFyO1xyXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZVRvb2x0aXAgLjI1cyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzN2FiNztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC53aWRnZXRze1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3NwZWNpYWxTZWFyY2h7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjYm91dG9uU3BlY2lhbFNlYXJjaHtcclxuICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTE5QkRCO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRpdkZvb3RlcntcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29sLW1kLTEyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMiU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBALW1vei1rZXlmcmFtZXMgbW92ZVRvb2x0aXAge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgNDUlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC40LDAuNCk7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG5cclxuICAgIDc1JSB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMywxLjMpO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSwxKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVUb29sdGlwIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCwwKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIDQ1JSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNCwwLjQpO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgIH1cclxuXHJcbiAgICA3NSUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjMsMS4zKTtcclxuICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsMSk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH07XHJcbn1cclxuXHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xpZW50TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB0aXRyZTogc3RyaW5nO1xyXG4gICAgY2xpZW50czogQ2xpZW50W107XHJcbiAgICBjbGllbnRTZWxlY3RlZDogQ2xpZW50O1xyXG4gICAgbm9DbGllbnQ6IG51bWJlcjtcclxuICAgIHRpdHJlTW9kYWw6IHN0cmluZztcclxuICAgIGNvbmZpcm1JbXA6IGJvb2xlYW47XHJcbiAgICAvLyBubyBjbGllbnRcclxuICAgIG5vQ2xpZW50VGV4dFNlYXJjaDogc3RyaW5nO1xyXG4gICAgbm9DbGllbnRGaWx0cmVMaXN0OiBzdHJpbmc7XHJcbiAgICBib29sU2VhcmNoQ2xpZW50OiBib29sZWFuO1xyXG4gICAgZXJyZXVyQ29kZUNsaWVudDogc3RyaW5nO1xyXG4gICAgLy8gZnVsbCB0ZXh0IHNlYXJjaFxyXG4gICAgc3BlY2lhbFRleHRTZWFyY2g6IHN0cmluZztcclxuICAgIGJvb2xGdWxsU2VhcmNoOiBib29sZWFuO1xyXG4gICAgZXJyZXVyU3BlY2lhbFNlYXJjaDogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jbGllbnRTZXJ2aWNlOiBDbGllbnRTZXJ2aWNlLCBwcml2YXRlIF9lcnJldXJTZXJ2aWNlOiBFcnJldXJTZXJ2aWNlKSB7IFxyXG4gICAgICAgIHRoaXMudGl0cmUgPSBcIkxpc3RlIGRlcyBDbGllbnRzXCI7XHJcbiAgICAgICAgdGhpcy5ub0NsaWVudFRleHRTZWFyY2ggPSBcIlwiO1xyXG4gICAgICAgIHRoaXMubm9DbGllbnRGaWx0cmVMaXN0ID0gXCJcIjtcclxuICAgICAgICB0aGlzLmJvb2xTZWFyY2hDbGllbnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVycmV1ckNvZGVDbGllbnQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuc3BlY2lhbFRleHRTZWFyY2ggPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuZXJyZXVyU3BlY2lhbFNlYXJjaCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5ib29sRnVsbFNlYXJjaCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYW5zIG9uIGluaXQnKTtcclxuICAgICAgICB0aGlzLmdldENsaWVudHMoKTsgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRDbGllbnRzKCl7XHJcbiAgICAgICAgdGhpcy5fY2xpZW50U2VydmljZS5nZXRDbGllbnRzKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50cyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAvL3ByaW50IGRvbm7DqWVzIHBvdXIgY2hhcXVlIGNsaWVudFxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGkgPCB0aGlzLmNsaWVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2xpZW50c1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2VycmV1clNlcnZpY2UuaGFuZGxlRXJyZXVyKGVycm9yKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRNb2RhbCgpe1xyXG4gICAgICAgIHRoaXMudGl0cmVNb2RhbD0gXCJTdXBwcmVzc2lvblwiOyBcclxuICAgIH1cclxuXHJcbiAgICBjbGllbnRTZWxlY3QoY2xpZW50OiBDbGllbnQpe1xyXG4gICAgICAgIHRoaXMuY29uZmlybUltcCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2xpZW50U2VsZWN0ZWQgPSBjbGllbnQ7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jbGllbnRTZWxlY3RlZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jbGllbnRTZWxlY3RlZC5ub0NsaWVudCk7XHJcbiAgICAgICAgdGhpcy5ub0NsaWVudCA9IHRoaXMuY2xpZW50U2VsZWN0ZWQubm9DbGllbnQ7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImlkIG1vbmdvIDogXCIgKyB0aGlzLmNsaWVudFNlbGVjdGVkLmNsaWVudElkKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlbGV0ZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuY2xpZW50U2VsZWN0ZWQgIT09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLl9jbGllbnRTZXJ2aWNlLmRlbGV0ZUNsaWVudCh0aGlzLmNsaWVudFNlbGVjdGVkKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2VycmV1clNlcnZpY2UuaGFuZGxlRXJyZXVyKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25maXJtSW1wID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaE5vQ2xpZW50KCl7XHJcbiAgICAgICAgdGhpcy5ib29sU2VhcmNoQ2xpZW50ID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb250ZW51IGlucHV0OiBcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ub0NsaWVudFRleHRTZWFyY2gpO1xyXG4gICAgICAgIGlmKHRoaXMubm9DbGllbnRUZXh0U2VhcmNoID09PSBudWxsIHx8ICh0aGlzLm5vQ2xpZW50VGV4dFNlYXJjaCkudG9TdHJpbmcoKSA9PT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRoaXMubm9DbGllbnRGaWx0cmVMaXN0ID0gXCJcIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGlzTmFOKE51bWJlcih0aGlzLm5vQ2xpZW50VGV4dFNlYXJjaCkpKXtcclxuICAgICAgICAgICAgdGhpcy5lcnJldXJDb2RlQ2xpZW50ID0gXCJJbnZhbGlkZS4gQ29kZSBDbGllbnQgZG9pdCDDqnRyZSB1biBub21icmUuXCI7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdwYXMgdW4gbm9tYnJlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9vbFNlYXJjaENsaWVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLm5vQ2xpZW50VGV4dFNlYXJjaC50b1N0cmluZygpLmxlbmd0aCA+IDEwKXtcclxuICAgICAgICAgICAgdGhpcy5lcnJldXJDb2RlQ2xpZW50ID0gXCJJbnZhbGlkZS4gQ29kZSBDbGllbnQgZMOpcGFzc2UgbGEgbG9uZ3VldXIgYWNjZXB0w6llLlwiO1xyXG4gICAgICAgICAgICBhbGVydCgnbm9tYnJlIHRyb3AgZ3JvcycpO1xyXG4gICAgICAgICAgICB0aGlzLmJvb2xTZWFyY2hDbGllbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NsaWVudFNlcnZpY2UuZ2V0Q2xpZW50KE51bWJlcih0aGlzLm5vQ2xpZW50VGV4dFNlYXJjaCkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vQ2xpZW50RmlsdHJlTGlzdCA9IChkYXRhLm5vQ2xpZW50KS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubm9DbGllbnRGaWx0cmVMaXN0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2NvZGUgY2xpZW50IGludmFsaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib29sU2VhcmNoQ2xpZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJldXJTZXJ2aWNlLmhhbmRsZUVycmV1cihlcnJvcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNwZWNpYWxTZWFyY2goKXtcclxuICAgICAgICB0aGlzLmJvb2xGdWxsU2VhcmNoID0gZmFsc2U7XHJcbiAgICAgICAgaWYodGhpcy5zcGVjaWFsVGV4dFNlYXJjaCA9PT0gbnVsbCAgfHwgKHRoaXMuc3BlY2lhbFRleHRTZWFyY2gpLnRvU3RyaW5nKCkgPT09IFwiXCIpe1xyXG4gICAgICAgICAgICB0aGlzLmdldENsaWVudHMoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuc3BlY2lhbFRleHRTZWFyY2gudG9TdHJpbmcoKS5sZW5ndGggPiAxNTApe1xyXG4gICAgICAgICAgICB0aGlzLmVycmV1clNwZWNpYWxTZWFyY2ggPSBcIkludmFsaWRlLiBOZSBwYXMgZMOpcGFzc2VyIDE1MCBjYXJhY3TDqHJlcy5cIjtcclxuICAgICAgICAgICAgdGhpcy5ib29sRnVsbFNlYXJjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2xpZW50U2VydmljZS5nZXRDbGllbnRzU3BlY2lhbFNlYXJjaCh0aGlzLnNwZWNpYWxUZXh0U2VhcmNoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnRzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNsaWVudHMpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCd0ZXh0IHNlYXJjaCBpbnZhbGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VycmV1clNlcnZpY2UuaGFuZGxlRXJyZXVyKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhY3R1YWxpc2VyKCl7XHJcbiAgICAgICAgaWYodGhpcy5ub0NsaWVudFRleHRTZWFyY2ggIT09IG51bGwgJiYgKHRoaXMubm9DbGllbnRUZXh0U2VhcmNoKS50b1N0cmluZygpICE9PSBcIlwiKXtcclxuICAgICAgICAgICAgdGhpcy5fY2xpZW50U2VydmljZS5nZXRDbGllbnQoTnVtYmVyKHRoaXMubm9DbGllbnRUZXh0U2VhcmNoKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9DbGllbnRGaWx0cmVMaXN0ID0gKGRhdGEubm9DbGllbnQpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ub0NsaWVudEZpbHRyZUxpc3QpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnY29kZSBpbnZhbGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9vbFNlYXJjaENsaWVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyZXVyU2VydmljZS5oYW5kbGVFcnJldXIoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5ub0NsaWVudEZpbHRyZUxpc3QgPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLmdldENsaWVudHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbG9nSW5wdXQodmFsdWUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIH1cclxufSJdfQ==
