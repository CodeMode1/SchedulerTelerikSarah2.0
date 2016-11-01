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
var evenement_1 = require('./evenement');
require('rxjs/Rx');
var Observable_1 = require('rxjs/Observable');
var EvenementService = (function () {
    function EvenementService(_http) {
        this._http = _http;
        this.evenements = [];
    }
    EvenementService.prototype.ngOnInit = function () {
    };
    //data[i].client_FK._id pour modifier un evenement pour actualiser la selection par rapport au client.
    EvenementService.prototype.getEvenements = function () {
        var _this = this;
        return this._http.get('http://localhost:3000/evenement')
            .map(function (response) {
            var data = response.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var evenement = new evenement_1.Evenement(data[i]._id, data[i].noEvenement, data[i].nom, data[i].dateEvenement, data[i].contact, data[i].client, data[i].selectEtat, data[i].dateSoumission, data[i].dateConfirmation, data[i].dateFacturation, data[i].dateNonRetenu, data[i].dateAnnulation, data[i].notes, data[i].validationTache, data[i].creerPar, data[i].dateCree, data[i].modifPar, data[i].modif);
                objs.push(evenement);
                console.log('les evx construit dans le service: ' + JSON.stringify(evenement));
                console.log('client retourné : ');
                console.log(data[i].client_FK);
            }
            ;
            // mettre a jour le array d'evx du service
            _this.evenements = objs;
            console.log("array du service: " + _this.evenements);
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json() || 'erreur servuer'); });
    };
    EvenementService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EvenementService);
    return EvenementService;
}());
exports.EvenementService = EvenementService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW5lbWVudHMvZXZlbmVtZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFtQyxlQUFlLENBQUMsQ0FBQTtBQUNuRCxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFDeEQsMEJBQTBCLGFBQWEsQ0FBQyxDQUFBO0FBQ3hDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFDakIsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFHN0M7SUFJSSwwQkFBcUIsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFIaEMsZUFBVSxHQUFnQixFQUFFLENBQUM7SUFHTyxDQUFDO0lBRXJDLG1DQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsc0dBQXNHO0lBQ3RHLHdDQUFhLEdBQWI7UUFBQSxpQkFzQkM7UUFyQkcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDO2FBQ25ELEdBQUcsQ0FBQyxVQUFDLFFBQWtCO1lBQ3BCLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDakMsSUFBSSxJQUFJLEdBQVUsRUFBRSxDQUFDO1lBQ3JCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUMvQixJQUFJLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQ3ZFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUN0RCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQzdGLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQ3JGLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9FLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtnQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkMsQ0FBQztZQUFBLENBQUM7WUFDRiwwQ0FBMEM7WUFDMUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksZ0JBQWdCLENBQUMsRUFBbEQsQ0FBa0QsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFsQ0w7UUFBQyxpQkFBVSxFQUFFOzt3QkFBQTtJQW1DYix1QkFBQztBQUFELENBbENBLEFBa0NDLElBQUE7QUFsQ1ksd0JBQWdCLG1CQWtDNUIsQ0FBQSIsImZpbGUiOiJldmVuZW1lbnRzL2V2ZW5lbWVudC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IEV2ZW5lbWVudCB9IGZyb20gJy4vZXZlbmVtZW50JztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFdmVuZW1lbnRTZXJ2aWNlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGV2ZW5lbWVudHM6IEV2ZW5lbWVudFtdID0gW107XHJcbiAgICBub21Vc2FnZUxvZ3VlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgX2h0dHA6IEh0dHApIHsgfVxyXG4gICAgXHJcbiAgICBuZ09uSW5pdCgpe1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9kYXRhW2ldLmNsaWVudF9GSy5faWQgcG91ciBtb2RpZmllciB1biBldmVuZW1lbnQgcG91ciBhY3R1YWxpc2VyIGxhIHNlbGVjdGlvbiBwYXIgcmFwcG9ydCBhdSBjbGllbnQuXHJcbiAgICBnZXRFdmVuZW1lbnRzKCk6IE9ic2VydmFibGU8RXZlbmVtZW50W10+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2V2ZW5lbWVudCcpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqczogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV2ZW5lbWVudCA9IG5ldyBFdmVuZW1lbnQoZGF0YVtpXS5faWQsIGRhdGFbaV0ubm9FdmVuZW1lbnQsIGRhdGFbaV0ubm9tLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLmRhdGVFdmVuZW1lbnQsIGRhdGFbaV0uY29udGFjdCwgZGF0YVtpXS5jbGllbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0uc2VsZWN0RXRhdCwgZGF0YVtpXS5kYXRlU291bWlzc2lvbiwgZGF0YVtpXS5kYXRlQ29uZmlybWF0aW9uLCBkYXRhW2ldLmRhdGVGYWN0dXJhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5kYXRlTm9uUmV0ZW51LCBkYXRhW2ldLmRhdGVBbm51bGF0aW9uLCBkYXRhW2ldLm5vdGVzLCBkYXRhW2ldLnZhbGlkYXRpb25UYWNoZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5jcmVlclBhciwgZGF0YVtpXS5kYXRlQ3JlZSwgZGF0YVtpXS5tb2RpZlBhciwgZGF0YVtpXS5tb2RpZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ianMucHVzaChldmVuZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbGVzIGV2eCBjb25zdHJ1aXQgZGFucyBsZSBzZXJ2aWNlOiAnICsgSlNPTi5zdHJpbmdpZnkoZXZlbmVtZW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGllbnQgcmV0b3VybsOpIDogJykgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFbaV0uY2xpZW50X0ZLKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAvLyBtZXR0cmUgYSBqb3VyIGxlIGFycmF5IGQnZXZ4IGR1IHNlcnZpY2VcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbmVtZW50cyA9IG9ianM7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFycmF5IGR1IHNlcnZpY2U6IFwiICsgdGhpcy5ldmVuZW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmpzO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkgfHwgJ2VycmV1ciBzZXJ2dWVyJykpO1xyXG4gICAgfVxyXG59Il19
