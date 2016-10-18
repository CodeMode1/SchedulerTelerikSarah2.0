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
var client_1 = require('./client');
var client_service_1 = require('./client.service');
var error_service_1 = require('../errors/error.service');
var ClientComponent = (function () {
    function ClientComponent(_clientService, _errorService) {
        this._clientService = _clientService;
        this._errorService = _errorService;
    }
    ClientComponent.prototype.ngOnInit = function () {
        /*
        if(this.clientIndex == 0){
            this.clientIndex = 1;
        }
        */
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', client_1.Client)
    ], ClientComponent.prototype, "client", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ClientComponent.prototype, "clientIndex", void 0);
    ClientComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-client',
            templateUrl: 'client.component.html',
            styles: ["\n        tr{\n            width:100%;\n        }\n        td{\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            width:200px;\n        }\n        \n    "]
        }), 
        __metadata('design:paramtypes', [client_service_1.ClientService, error_service_1.ErrorService])
    ], ClientComponent);
    return ClientComponent;
}());
exports.ClientComponent = ClientComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMvY2xpZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlDLGVBQWUsQ0FBQyxDQUFBO0FBQ3pELHVCQUF1QixVQUFVLENBQUMsQ0FBQTtBQUNsQywrQkFBOEIsa0JBQWtCLENBQUMsQ0FBQTtBQUNqRCw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQW1CdkQ7SUFJSSx5QkFBb0IsY0FBNkIsRUFBVSxhQUEyQjtRQUFsRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQUksQ0FBQztJQUUzRixrQ0FBUSxHQUFSO1FBQ0k7Ozs7VUFJRTtJQUNOLENBQUM7SUFYRDtRQUFDLFlBQUssRUFBRTs7bURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7d0RBQUE7SUFuQlo7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsTUFBTSxFQUFFLENBQUMsNE5BV1IsQ0FBQztTQUNMLENBQUM7O3VCQUFBO0lBY0Ysc0JBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLHVCQUFlLGtCQWEzQixDQUFBIiwiZmlsZSI6ImNsaWVudHMvY2xpZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuL2NsaWVudCc7XHJcbmltcG9ydCB7IENsaWVudFNlcnZpY2UgfSBmcm9tICcuL2NsaWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdteS1jbGllbnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdjbGllbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIHRye1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZHtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbGllbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgY2xpZW50OiBDbGllbnQ7XHJcbiAgICBASW5wdXQoKSBjbGllbnRJbmRleDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NsaWVudFNlcnZpY2U6IENsaWVudFNlcnZpY2UsIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgXHJcbiAgICAgICAgLypcclxuICAgICAgICBpZih0aGlzLmNsaWVudEluZGV4ID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLmNsaWVudEluZGV4ID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKi9cclxuICAgIH1cclxufSJdfQ==
