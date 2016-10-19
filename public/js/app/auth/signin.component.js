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
var user_1 = require('../users/user');
var auth_service_1 = require('./auth.service');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var erreur_service_1 = require('../erreurs/erreur.service');
var SigninComponent = (function () {
    function SigninComponent(_formBuilder, _authService, _router, _erreurService) {
        this._formBuilder = _formBuilder;
        this._authService = _authService;
        this._router = _router;
        this._erreurService = _erreurService;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.signinForm = this._formBuilder.group({
            courriel: ['', [forms_1.Validators.required, this.estCourrielOK]],
            password: ['', forms_1.Validators.required]
        });
    };
    /* retourne 1 juste quand le courriel est valide
       reg exp fiable à 99.9%
    */
    SigninComponent.prototype.estCourrielOK = function (control) {
        if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"))
            return { courrielInvalide: true };
    };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.signinForm.value);
        var user = new user_1.User(this.signinForm.value.courriel, this.signinForm.value.password);
        console.log('sign in: ' + user.courriel + user.password);
        this._authService.signIn(user)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            //this._router.navigateByUrl('/');
        }, function (error) { return _this._erreurService.handleErreur(error); });
    };
    SigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-signin',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <form [formGroup]=\"signinForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"courriel\">Courriel</label>\n                    <input type=\"email\" id=\"courriel\" class=\"form-control\" formControlName=\"courriel\" placeholder=\"my@email.com\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"password\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!signinForm.valid\">Sign In</button>\n            </form>\n        </section>\n    "
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService, router_1.Router, erreur_service_1.ErreurService])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHFCQUFxQixlQUFlLENBQUMsQ0FBQTtBQUNyQyw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3Qyx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6QyxzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRiwrQkFBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQXFCMUQ7SUFHSSx5QkFBb0IsWUFBeUIsRUFBVSxZQUF5QixFQUFVLE9BQWUsRUFBVSxjQUE2QjtRQUE1SCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO0lBQUksQ0FBQztJQUVySixrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUN0QyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDekQsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3RDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7TUFFRTtJQUNNLHVDQUFhLEdBQXJCLFVBQXNCLE9BQW9CO1FBQ3RDLEVBQUUsQ0FBQSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsdUlBQXVJLENBQUMsQ0FBQztZQUM3SixNQUFNLENBQUMsRUFBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDekIsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsa0NBQWtDO1FBQ3RDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUF2QyxDQUF1QyxDQUNuRCxDQUFDO0lBQ1YsQ0FBQztJQXBETDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLGswQkFjVDtTQUNKLENBQUM7O3VCQUFBO0lBbUNGLHNCQUFDO0FBQUQsQ0FsQ0EsQUFrQ0MsSUFBQTtBQWxDWSx1QkFBZSxrQkFrQzNCLENBQUEiLCJmaWxlIjoiYXV0aC9zaWduaW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3VzZXJzL3VzZXInO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEVycmV1clNlcnZpY2UgfSBmcm9tICcuLi9lcnJldXJzL2VycmV1ci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbXktc2lnbmluJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cclxuICAgICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJzaWduaW5Gb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvdXJyaWVsXCI+Q291cnJpZWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImNvdXJyaWVsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBmb3JtQ29udHJvbE5hbWU9XCJjb3VycmllbFwiIHBsYWNlaG9sZGVyPVwibXlAZW1haWwuY29tXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiIXNpZ25pbkZvcm0udmFsaWRcIj5TaWduIEluPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgc2lnbmluRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfZXJyZXVyU2VydmljZTogRXJyZXVyU2VydmljZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IFxyXG4gICAgICAgIHRoaXMuc2lnbmluRm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgY291cnJpZWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIHRoaXMuZXN0Q291cnJpZWxPS11dLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIHJldG91cm5lIDEganVzdGUgcXVhbmQgbGUgY291cnJpZWwgZXN0IHZhbGlkZSBcclxuICAgICAgIHJlZyBleHAgZmlhYmxlIMOgIDk5LjklXHJcbiAgICAqL1xyXG4gICAgcHJpdmF0ZSBlc3RDb3VycmllbE9LKGNvbnRyb2w6IEZvcm1Db250cm9sKToge1tjaGFpbmU6IHN0cmluZ106IGJvb2xlYW59e1xyXG4gICAgICAgIGlmKCFjb250cm9sLnZhbHVlLm1hdGNoKFwiW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XCIpKVxyXG4gICAgICAgICAgICByZXR1cm4ge2NvdXJyaWVsSW52YWxpZGU6IHRydWV9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zaWduaW5Gb3JtLnZhbHVlKTtcclxuICAgICAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIodGhpcy5zaWduaW5Gb3JtLnZhbHVlLmNvdXJyaWVsLCB0aGlzLnNpZ25pbkZvcm0udmFsdWUucGFzc3dvcmQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzaWduIGluOiAnICsgdXNlci5jb3VycmllbCArIHVzZXIucGFzc3dvcmQpO1xyXG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnNpZ25Jbih1c2VyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsIGRhdGEudXNlcklkKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyZXVyU2VydmljZS5oYW5kbGVFcnJldXIoZXJyb3IpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn0iXX0=
