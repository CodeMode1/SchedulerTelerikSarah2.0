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
var error_1 = require('./error');
var error_service_1 = require('./error.service');
var ErrorComponent = (function () {
    function ErrorComponent(errorService) {
        this.errorService = errorService;
        this.errorDisplay = 'none';
        this.errorData = error_1.Error;
    }
    ErrorComponent.prototype.onErrorHandled = function () {
        this.errorDisplay = 'none';
    };
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorService.errorOccurred.subscribe(function (errorData) {
            _this.errorData = errorData;
            _this.errorDisplay = 'block';
        });
    };
    ErrorComponent = __decorate([
        core_1.Component({
            selector: 'my-error',
            template: "\n      <div class=\"backdrop\" [ngStyle]=\"{'display': errorDisplay}\"></div>\n        <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display': errorDisplay}\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onErrorHandled()\"><span aria-hidden=\"true\">&times;</span></button>\n                        <h4 class=\"modal-title\">{{errorData?.title}}</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                     <p>{{errorData?.message}}</p>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"onErrorHandled()\">Close</button>\n                    </div>\n                </div><!-- /.modal-content -->\n            </div><!-- /.modal-dialog -->\n        </div><!-- /.modal -->     \n    ",
            styles: ["\n        .backdrop {\n            background-color: rgba(0,0,0,0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100vh;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService])
    ], ErrorComponent);
    return ErrorComponent;
}());
exports.ErrorComponent = ErrorComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9ycy9lcnJvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxzQkFBc0IsU0FBUyxDQUFDLENBQUE7QUFDaEMsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFrQy9DO0lBSUksd0JBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBSDdDLGlCQUFZLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLGNBQVMsR0FBRyxhQUFLLENBQUM7SUFFNkIsQ0FBQztJQUVoRCx1Q0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FDckMsVUFBQSxTQUFTO1lBQ0wsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsS0FBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7UUFDaEMsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBakRMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSw0aENBa0JUO1lBQ0QsTUFBTSxFQUFFLENBQUMsdU5BU1IsQ0FBQztTQUNMLENBQUM7O3NCQUFBO0lBbUJGLHFCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtBQWxCWSxzQkFBYyxpQkFrQjFCLENBQUEiLCJmaWxlIjoiZXJyb3JzL2Vycm9yLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVycm9yIH0gZnJvbSAnLi9lcnJvcic7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4vZXJyb3Iuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktZXJyb3InLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImJhY2tkcm9wXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogZXJyb3JEaXNwbGF5fVwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogZXJyb3JEaXNwbGF5fVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJvbkVycm9ySGFuZGxlZCgpXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj57e2Vycm9yRGF0YT8udGl0bGV9fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPHA+e3tlcnJvckRhdGE/Lm1lc3NhZ2V9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm9uRXJyb3JIYW5kbGVkKClcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLm1vZGFsLWNvbnRlbnQgLS0+XHJcbiAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5tb2RhbC1kaWFsb2cgLS0+XHJcbiAgICAgICAgPC9kaXY+PCEtLSAvLm1vZGFsIC0tPiAgICAgXHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIC5iYWNrZHJvcCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIH1cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFcnJvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBlcnJvckRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBlcnJvckRhdGEgPSBFcnJvcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVycm9yU2VydmljZTpFcnJvclNlcnZpY2Upe31cclxuXHJcbiAgICBvbkVycm9ySGFuZGxlZCgpe1xyXG4gICAgICAgIHRoaXMuZXJyb3JEaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5lcnJvclNlcnZpY2UuZXJyb3JPY2N1cnJlZC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGVycm9yRGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yRGF0YSA9IGVycm9yRGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JEaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXX0=
