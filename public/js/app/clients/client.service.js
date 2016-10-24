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
var http_1 = require('@angular/http');
var client_1 = require('./client');
require('rxjs/Rx');
var Observable_1 = require('rxjs/Observable');
var ClientService = (function () {
    function ClientService(_http) {
        this._http = _http;
        this.clients = [];
    }
    ClientService.prototype.creerClient = function (client) {
        var body = JSON.stringify(client);
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/client' + token, body, { headers: header })
            .map(function (response) {
            var data = response.json().obj;
            var client = new client_1.Client(data._id, data.noClient, data.prenom, data.nom, data.noCompte, data.courriel, data.cell, data.compagnie, data.adresse, data.ville, data.codePostal, data.telPrincipal, data.province, data.pays, data.fax, data.telSecondaire, data.memo, data.memoAVenir, data.noExTaxeProv, data.noExTaxeFed, data.selectStatut, data.selectSource, data.modifPar, data.modif, data.dateDernEv, data.creerPar, data.dateCree);
            return client;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json() || 'erreur serveur'); });
    };
    ClientService.prototype.getClients = function () {
        var _this = this;
        return this._http.get('http://localhost:3000/client')
            .map(function (response) {
            //this.clients = data;
            //console.log('les clients: ' + JSON.stringify(data));
            var data = response.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var client = new client_1.Client(data[i]._id, data[i].noClient, data[i].prenom, data[i].nom, data[i].noCompte, data[i].courriel, data[i].cell, data[i].compagnie, data[i].adresse, data[i].ville, data[i].codePostal, data[i].telPrincipal, data[i].province, data[i].pays, data[i].fax, data[i].telSecondaire, data[i].memo, data[i].memoAVenir, data[i].noExTaxeProv, data[i].noExTaxeFed, data[i].selectStatut, data[i].selectSource, data[i].modifPar, data[i].modif, data[i].dateDernEv, data[i].creerPar, data[i].dateCree);
                objs.push(client);
                console.log('les clients: ' + JSON.stringify(client));
            }
            ;
            //mettre a jour le array de clients du service
            _this.clients = objs;
            console.log(_this.clients);
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json() || 'erreur serveur'); });
    };
    ClientService.prototype.updateClient = function (client) {
    };
    ClientService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ClientService);
    return ClientService;
}());
exports.ClientService = ClientService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMvY2xpZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFDeEQsdUJBQXVCLFVBQVUsQ0FBQyxDQUFBO0FBQ2xDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFDakIsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFHN0M7SUFHSSx1QkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFGL0IsWUFBTyxHQUFhLEVBQUUsQ0FBQztJQUVZLENBQUM7SUFFcEMsbUNBQVcsR0FBWCxVQUFZLE1BQWM7UUFDdEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxJQUFNLE1BQU0sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDakUsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDN0YsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDhCQUE4QixHQUFHLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLENBQUM7YUFDbEYsR0FBRyxDQUFDLFVBQUMsUUFBa0I7WUFDcEIsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQyxJQUFJLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUNySixJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUNyRyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUNySCxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLGdCQUFnQixDQUFDLEVBQWxELENBQWtELENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsa0NBQVUsR0FBVjtRQUFBLGlCQXFCQztRQXBCRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUM7YUFDaEQsR0FBRyxDQUFDLFVBQUMsUUFBa0I7WUFDaEIsc0JBQXNCO1lBQ3RCLHNEQUFzRDtZQUN0RCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2pDLElBQUksSUFBSSxHQUFVLEVBQUUsQ0FBQztZQUNyQixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztnQkFDL0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDM0wsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFDekwsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDM0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3RELENBQUM7WUFBQSxDQUFDO1lBQ0YsOENBQThDO1lBQzlDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLGdCQUFnQixDQUFDLEVBQWxELENBQWtELENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLE1BQWM7SUFFM0IsQ0FBQztJQS9DTDtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBaURiLG9CQUFDO0FBQUQsQ0FoREEsQUFnREMsSUFBQTtBQWhEWSxxQkFBYSxnQkFnRHpCLENBQUEiLCJmaWxlIjoiY2xpZW50cy9jbGllbnQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnLi9jbGllbnQnO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENsaWVudFNlcnZpY2Uge1xyXG4gICAgY2xpZW50czogQ2xpZW50W10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBjcmVlckNsaWVudChjbGllbnQ6IENsaWVudCl7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGNsaWVudCk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvY2xpZW50JyArIHRva2VuLCBib2R5LCB7aGVhZGVyczogaGVhZGVyfSlcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcclxuICAgICAgICAgICAgICAgIGxldCBjbGllbnQgPSBuZXcgQ2xpZW50KGRhdGEuX2lkLCBkYXRhLm5vQ2xpZW50LCBkYXRhLnByZW5vbSwgZGF0YS5ub20sIGRhdGEubm9Db21wdGUsIGRhdGEuY291cnJpZWwsIGRhdGEuY2VsbCwgZGF0YS5jb21wYWduaWUsIGRhdGEuYWRyZXNzZSwgZGF0YS52aWxsZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNvZGVQb3N0YWwsIGRhdGEudGVsUHJpbmNpcGFsLCBkYXRhLnByb3ZpbmNlLCBkYXRhLnBheXMsIGRhdGEuZmF4LCBkYXRhLnRlbFNlY29uZGFpcmUsIGRhdGEubWVtbyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1lbW9BVmVuaXIsIGRhdGEubm9FeFRheGVQcm92LCBkYXRhLm5vRXhUYXhlRmVkLCBkYXRhLnNlbGVjdFN0YXR1dCwgZGF0YS5zZWxlY3RTb3VyY2UsIGRhdGEubW9kaWZQYXIsIGRhdGEubW9kaWYsIFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0ZURlcm5FdiwgZGF0YS5jcmVlclBhciwgZGF0YS5kYXRlQ3JlZSk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsaWVudDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpIHx8ICdlcnJldXIgc2VydmV1cicpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDbGllbnRzKCk6IE9ic2VydmFibGU8Q2xpZW50W10+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2NsaWVudCcpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5jbGllbnRzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdsZXMgY2xpZW50czogJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqczogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xpZW50ID0gbmV3IENsaWVudChkYXRhW2ldLl9pZCwgZGF0YVtpXS5ub0NsaWVudCwgZGF0YVtpXS5wcmVub20sIGRhdGFbaV0ubm9tLCBkYXRhW2ldLm5vQ29tcHRlLCBkYXRhW2ldLmNvdXJyaWVsLCBkYXRhW2ldLmNlbGwsIGRhdGFbaV0uY29tcGFnbmllLCBkYXRhW2ldLmFkcmVzc2UsIGRhdGFbaV0udmlsbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5jb2RlUG9zdGFsLCBkYXRhW2ldLnRlbFByaW5jaXBhbCwgZGF0YVtpXS5wcm92aW5jZSwgZGF0YVtpXS5wYXlzLCBkYXRhW2ldLmZheCwgZGF0YVtpXS50ZWxTZWNvbmRhaXJlLCBkYXRhW2ldLm1lbW8sIGRhdGFbaV0ubWVtb0FWZW5pciwgZGF0YVtpXS5ub0V4VGF4ZVByb3YsIGRhdGFbaV0ubm9FeFRheGVGZWQsIFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbaV0uc2VsZWN0U3RhdHV0LCBkYXRhW2ldLnNlbGVjdFNvdXJjZSwgZGF0YVtpXS5tb2RpZlBhciwgZGF0YVtpXS5tb2RpZiwgXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5kYXRlRGVybkV2LCBkYXRhW2ldLmNyZWVyUGFyLCBkYXRhW2ldLmRhdGVDcmVlKTtcclxuICAgICAgICAgICAgICAgICAgICBvYmpzLnB1c2goY2xpZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbGVzIGNsaWVudHM6ICcgKyBKU09OLnN0cmluZ2lmeShjbGllbnQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbWV0dHJlIGEgam91ciBsZSBhcnJheSBkZSBjbGllbnRzIGR1IHNlcnZpY2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudHMgPSBvYmpzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2xpZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9ianM7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpIHx8ICdlcnJldXIgc2VydmV1cicpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDbGllbnQoY2xpZW50OiBDbGllbnQpe1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIl19
