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
var HomeComponent = (function () {
    function HomeComponent() {
        this.title = "Système Abordable de Réservation et Agenda";
        this.nouvelles = "Nouvelles";
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-home',
            template: "\n        <div class=\"jumbotron col-md-12\">\n            <h2>{{title}}</h2>\n            <p><a class=\"btn btn-primary btn-lg\" role=\"button\">Nouvelles</a></p>\n        </div>\n        <section class=\"row col-md-12 icons\">\n            <div class=\"container col-md-4 icon\">\n                <span class=\"glyphicon glyphicon-calendar\" aria-hidden=\"true\"></span>\n            </div>\n            <div class=\"container col-md-4 icon\">\n                <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span>\n            </div>\n            <div class=\"container col-md-4 icon\">\n                <span class=\"glyphicon glyphicon-list-alt\" aria-hidden=\"true\"></span>\n            </div>\n        </section>\n        <article id=\"nouvelles\" class=\"jumbotron col-md-12\">\n            <h3>{{nouvelles}}</h3>\n            <my-nouvelles></my-nouvelles>\n        </article>\n    ",
            styles: ["\n        *{\n            margin:0;\n        }\n\n        h2, h3{\n            padding: 2% 0 2% 0;\n        }\n\n        .jumbotron{\n            clear:both;\n            float:left;\n            width:100%;\n        }\n\n        .container{\n            margin:0;\n            text-align:center;\n            padding:2% 0 2% 0;\n            background-color: #A2B5CD;\n            width:100%;\n        }\n\n        .glyphicon{\n            font-size:2vw;\n        }\n\n        .row{\n            padding:0;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUEyRGxEO0lBR0k7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLDRDQUE0QyxDQUFDO1FBQzFELElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxnQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQWhFbEI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSw2NEJBb0JUO1lBQ0QsTUFBTSxFQUFFLENBQUMsOGdCQThCUixDQUFDO1NBQ0wsQ0FBQzs7cUJBQUE7SUFVRixvQkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFkscUJBQWEsZ0JBU3pCLENBQUEiLCJmaWxlIjoibG9naW4vaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbXktaG9tZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJqdW1ib3Ryb24gY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgIDxoMj57e3RpdGxlfX08L2gyPlxyXG4gICAgICAgICAgICA8cD48YSBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiByb2xlPVwiYnV0dG9uXCI+Tm91dmVsbGVzPC9hPjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInJvdyBjb2wtbWQtMTIgaWNvbnNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjb2wtbWQtNCBpY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2FsZW5kYXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGNvbC1tZC00IGljb25cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi11c2VyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjb2wtbWQtNCBpY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbGlzdC1hbHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8YXJ0aWNsZSBpZD1cIm5vdXZlbGxlc1wiIGNsYXNzPVwianVtYm90cm9uIGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICA8aDM+e3tub3V2ZWxsZXN9fTwvaDM+XHJcbiAgICAgICAgICAgIDxteS1ub3V2ZWxsZXM+PC9teS1ub3V2ZWxsZXM+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAqe1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgyLCBoM3tcclxuICAgICAgICAgICAgcGFkZGluZzogMiUgMCAyJSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmp1bWJvdHJvbntcclxuICAgICAgICAgICAgY2xlYXI6Ym90aDtcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzoyJSAwIDIlIDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNBMkI1Q0Q7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ2x5cGhpY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6MnZ3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgIH1cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBub3V2ZWxsZXM6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKCkgeyBcclxuICAgICAgICB0aGlzLnRpdGxlID0gXCJTeXN0w6htZSBBYm9yZGFibGUgZGUgUsOpc2VydmF0aW9uIGV0IEFnZW5kYVwiO1xyXG4gICAgICAgIHRoaXMubm91dmVsbGVzID0gXCJOb3V2ZWxsZXNcIjtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG59Il19
