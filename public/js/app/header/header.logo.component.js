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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIubG9nby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQTRCbEQ7SUFHSTtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsc0JBQXNCLENBQUM7SUFDdEMsQ0FBQztJQUVGLGdDQUFRLEdBQVIsY0FBYSxDQUFDO0lBbENsQjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLDZFQUlUO1lBQ0QsTUFBTSxFQUFFLENBQUMsc1VBZVI7YUFDQTtTQUNKLENBQUM7O3FCQUFBO0lBVUYsb0JBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHFCQUFhLGdCQVN6QixDQUFBIiwiZmlsZSI6ImhlYWRlci9oZWFkZXIubG9nby5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdteS1sb2dvJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWcgW3NyY109XCJwYXRoXCIgYWx0PVwie3thbHR9fVwiPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MjAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlZGY1O1xyXG4gICAgICAgICAgICB3aWR0aDoxNSU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ29Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYWx0OiBzdHJpbmc7XHJcbiAgICBwYXRoOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmFsdCA9IFwiU2FyYWggbG9nb1wiO1xyXG4gICAgICAgIHRoaXMucGF0aCA9IFwiLi9pbWcvc2FyYWgtbG9nby5wbmdcIjtcclxuICAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxufSJdfQ==
