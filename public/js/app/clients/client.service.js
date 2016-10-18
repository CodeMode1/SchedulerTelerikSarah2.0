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
            .map(function (response) { return response.json().obj; })
            .do(function (data) {
            _this.clients = data;
            console.log('les clients: ' + JSON.stringify(data));
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json() || 'erreur serveur'); });
    };
    ClientService.prototype.getAdminLoggue = function () {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.get('http://localhost:3000/client/adminLogue' + token)
            .map(function (response) { return response.json().obj; })
            .catch(function (error) { return Observable_1.Observable.throw(error.json() || 'erreur serveur'); });
    };
    ClientService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ClientService);
    return ClientService;
}());
exports.ClientService = ClientService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMvY2xpZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFDeEQsdUJBQXVCLFVBQVUsQ0FBQyxDQUFBO0FBRWxDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFDakIsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFHN0M7SUFHSSx1QkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFGL0IsWUFBTyxHQUFhLEVBQUUsQ0FBQztJQUVZLENBQUM7SUFFcEMsbUNBQVcsR0FBWCxVQUFZLE1BQWM7UUFDdEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxJQUFNLE1BQU0sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDakUsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDN0YsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDhCQUE4QixHQUFHLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLENBQUM7YUFDbEYsR0FBRyxDQUFDLFVBQUMsUUFBa0I7WUFDcEIsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQyxJQUFJLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUNySixJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUNyRyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUNySCxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLGdCQUFnQixDQUFDLEVBQWxELENBQWtELENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsa0NBQVUsR0FBVjtRQUFBLGlCQVFDO1FBUEcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDO2FBQ2hELEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBVSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUE3QixDQUE2QixDQUFDO2FBQ3RELEVBQUUsQ0FBRSxVQUFBLElBQUk7WUFDTCxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLGdCQUFnQixDQUFDLEVBQWxELENBQWtELENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsc0NBQWMsR0FBZDtRQUNJLElBQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzdGLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsR0FBRyxLQUFLLENBQUM7YUFDbkUsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBSyxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQTFCLENBQTBCLENBQUM7YUFDdkQsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLGdCQUFnQixDQUFDLEVBQWxELENBQWtELENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBckNMO1FBQUMsaUJBQVUsRUFBRTs7cUJBQUE7SUFzQ2Isb0JBQUM7QUFBRCxDQXJDQSxBQXFDQyxJQUFBO0FBckNZLHFCQUFhLGdCQXFDekIsQ0FBQSIsImZpbGUiOiJjbGllbnRzL2NsaWVudC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuL2NsaWVudCc7XHJcbmltcG9ydCB7IEFkbWluIH0gZnJvbSAnLi4vdXNlcnMvYWRtaW4nO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENsaWVudFNlcnZpY2Uge1xyXG4gICAgY2xpZW50czogQ2xpZW50W10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBjcmVlckNsaWVudChjbGllbnQ6IENsaWVudCl7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGNsaWVudCk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvY2xpZW50JyArIHRva2VuLCBib2R5LCB7aGVhZGVyczogaGVhZGVyfSlcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcclxuICAgICAgICAgICAgICAgIGxldCBjbGllbnQgPSBuZXcgQ2xpZW50KGRhdGEuX2lkLCBkYXRhLm5vQ2xpZW50LCBkYXRhLnByZW5vbSwgZGF0YS5ub20sIGRhdGEubm9Db21wdGUsIGRhdGEuY291cnJpZWwsIGRhdGEuY2VsbCwgZGF0YS5jb21wYWduaWUsIGRhdGEuYWRyZXNzZSwgZGF0YS52aWxsZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNvZGVQb3N0YWwsIGRhdGEudGVsUHJpbmNpcGFsLCBkYXRhLnByb3ZpbmNlLCBkYXRhLnBheXMsIGRhdGEuZmF4LCBkYXRhLnRlbFNlY29uZGFpcmUsIGRhdGEubWVtbyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1lbW9BVmVuaXIsIGRhdGEubm9FeFRheGVQcm92LCBkYXRhLm5vRXhUYXhlRmVkLCBkYXRhLnNlbGVjdFN0YXR1dCwgZGF0YS5zZWxlY3RTb3VyY2UsIGRhdGEubW9kaWZQYXIsIGRhdGEubW9kaWYsIFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0ZURlcm5FdiwgZGF0YS5jcmVlclBhciwgZGF0YS5kYXRlQ3JlZSk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsaWVudDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpIHx8ICdlcnJldXIgc2VydmV1cicpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDbGllbnRzKCk6IE9ic2VydmFibGU8Q2xpZW50W10+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2NsaWVudCcpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPENsaWVudFtdPnJlc3BvbnNlLmpzb24oKS5vYmopXHJcbiAgICAgICAgICAgICAgICAuZG8oIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50cyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xlcyBjbGllbnRzOiAnICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSB8fCAnZXJyZXVyIHNlcnZldXInKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldEFkbWluTG9nZ3VlKCk6IE9ic2VydmFibGU8QWRtaW4+e1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyAnP3Rva2VuPScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2NsaWVudC9hZG1pbkxvZ3VlJyArIHRva2VuKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxBZG1pbj5yZXNwb25zZS5qc29uKCkub2JqKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkgfHwgJ2VycmV1ciBzZXJ2ZXVyJykpO1xyXG4gICAgfSBcclxufVxyXG4iXX0=
