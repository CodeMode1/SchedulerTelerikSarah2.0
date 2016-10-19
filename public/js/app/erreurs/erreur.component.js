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
var erreur_service_1 = require('./erreur.service');
var ErreurComponent = (function () {
    function ErreurComponent(errorService) {
        this.errorService = errorService;
        this.erreurDisplay = 'none';
        this.erreurData = Error;
    }
    ErreurComponent.prototype.onErreurHandled = function () {
        this.erreurDisplay = 'none';
    };
    ErreurComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorService.erreurArrivee.subscribe(function (errorData) {
            _this.erreurData = errorData;
            _this.erreurDisplay = 'block';
        });
    };
    ErreurComponent = __decorate([
        core_1.Component({
            selector: 'my-erreur',
            template: "\n      <div class=\"backdrop\" [ngStyle]=\"{'display': erreurDisplay}\"></div>\n        <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display': erreurDisplay}\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onErreurHandled()\"><span aria-hidden=\"true\">&times;</span></button>\n                        <h4 class=\"modal-title\">{{erreurData?.title}}</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                     <p>{{erreurData?.message}}</p>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"onErreurHandled()\">Close</button>\n                    </div>\n                </div><!-- /.modal-content -->\n            </div><!-- /.modal-dialog -->\n        </div><!-- /.modal -->     \n    ",
            styles: ["\n        .backdrop {\n            background-color: rgba(0,0,0,0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100vh;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [erreur_service_1.ErreurService])
    ], ErreurComponent);
    return ErreurComponent;
}());
exports.ErreurComponent = ErreurComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycmV1cnMvZXJyZXVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELCtCQUE4QixrQkFBa0IsQ0FBQyxDQUFBO0FBa0NqRDtJQUlJLHlCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUg5QyxrQkFBYSxHQUFHLE1BQU0sQ0FBQztRQUN2QixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBRTZCLENBQUM7SUFFakQseUNBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQ3JDLFVBQUEsU0FBUztZQUNMLEtBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzVCLEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBQ2pDLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQWpETDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsa2lDQWtCVDtZQUNELE1BQU0sRUFBRSxDQUFDLHVOQVNSLENBQUM7U0FDTCxDQUFDOzt1QkFBQTtJQW1CRixzQkFBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFsQlksdUJBQWUsa0JBa0IzQixDQUFBIiwiZmlsZSI6ImVycmV1cnMvZXJyZXVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVycmV1ciB9IGZyb20gJy4vZXJyZXVyJztcclxuaW1wb3J0IHsgRXJyZXVyU2VydmljZSB9IGZyb20gJy4vZXJyZXVyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWVycmV1cicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBlcnJldXJEaXNwbGF5fVwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogZXJyZXVyRGlzcGxheX1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiAoY2xpY2spPVwib25FcnJldXJIYW5kbGVkKClcIj48c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPnt7ZXJyZXVyRGF0YT8udGl0bGV9fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPHA+e3tlcnJldXJEYXRhPy5tZXNzYWdlfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIChjbGljayk9XCJvbkVycmV1ckhhbmRsZWQoKVwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIC8ubW9kYWwtY29udGVudCAtLT5cclxuICAgICAgICAgICAgPC9kaXY+PCEtLSAvLm1vZGFsLWRpYWxvZyAtLT5cclxuICAgICAgICA8L2Rpdj48IS0tIC8ubW9kYWwgLS0+ICAgICBcclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLmJhY2tkcm9wIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgfVxyXG4gICAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVycmV1ckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBlcnJldXJEaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZXJyZXVyRGF0YSA9IEVycm9yO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXJyb3JTZXJ2aWNlOkVycmV1clNlcnZpY2Upe31cclxuXHJcbiAgICBvbkVycmV1ckhhbmRsZWQoKXtcclxuICAgICAgICB0aGlzLmVycmV1ckRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLmVycm9yU2VydmljZS5lcnJldXJBcnJpdmVlLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZXJyb3JEYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyZXVyRGF0YSA9IGVycm9yRGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyZXVyRGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Il19
