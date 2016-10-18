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
var LogoComponent = (function () {
    function LogoComponent() {
        this.alt = "Sarah logo";
        this.path = "./img/sarah-logo.png";
    }
    LogoComponent.prototype.ngOnInit = function () { };
    LogoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-logo',
            template: "\n    <div>\n        <img [src]=\"path\" alt=\"{{alt}}\">\n    </div>\n    ",
            styles: ["\n        img {\n            max-width:100%;\n            height:auto;\n            display:inline-block;\n            padding:20%;\n        }\n\n        div{\n            display:block;\n            float:left;\n            background-color: #e7edf5;\n            width:15%;\n            text-align:center;\n        }\n    "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LogoComponent);
    return LogoComponent;
}());
exports.LogoComponent = LogoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIubG9nby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQTRCbEQ7SUFHSTtRQUZBLFFBQUcsR0FBVyxZQUFZLENBQUM7UUFDM0IsU0FBSSxHQUFXLHNCQUFzQixDQUFDO0lBQ3RCLENBQUM7SUFFakIsZ0NBQVEsR0FBUixjQUFhLENBQUM7SUEvQmxCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsNkVBSVQ7WUFDRCxNQUFNLEVBQUUsQ0FBQyxzVUFlUjthQUNBO1NBQ0osQ0FBQzs7cUJBQUE7SUFPRixvQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlkscUJBQWEsZ0JBTXpCLENBQUEiLCJmaWxlIjoiaGVhZGVyL2hlYWRlci5sb2dvLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ215LWxvZ28nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGltZyBbc3JjXT1cInBhdGhcIiBhbHQ9XCJ7e2FsdH19XCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZzoyMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2VkZjU7XHJcbiAgICAgICAgICAgIHdpZHRoOjE1JTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9nb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBhbHQ6IHN0cmluZyA9IFwiU2FyYWggbG9nb1wiO1xyXG4gICAgcGF0aDogc3RyaW5nID0gXCIuL2ltZy9zYXJhaC1sb2dvLnBuZ1wiO1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG59Il19
