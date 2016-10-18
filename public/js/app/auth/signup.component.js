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
var forms_1 = require('@angular/forms');
var admin_1 = require('../users/admin');
var auth_service_1 = require('./auth.service');
var error_service_1 = require('../errors/error.service');
var router_1 = require('@angular/router');
var SignupComponent = (function () {
    function SignupComponent(_formBuilder, _authService, _errorService, _router) {
        this._formBuilder = _formBuilder;
        this._authService = _authService;
        this._errorService = _errorService;
        this._router = _router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this._formBuilder.group({
            prenom: ['', forms_1.Validators.required],
            nom: ['', forms_1.Validators.required],
            courriel: ['', [forms_1.Validators.required, this.estCourrielOK]],
            password: ['', forms_1.Validators.required]
        });
    };
    SignupComponent.prototype.estCourrielOK = function (control) {
        if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"))
            return { courrielInvalide: true };
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.signupForm.value);
        var admin = new admin_1.Admin(this.signupForm.value.courriel, this.signupForm.value.password, this.signupForm.value.prenom, this.signupForm.value.nom);
        console.log('sign up: ' + admin.courriel + admin.password + admin.prenom + admin.nom);
        this._authService.signUp(admin)
            .subscribe(function (data) {
            console.log(data);
            alert('Membre sauvegarder: ' + (data.obj.prenom) + " " + (data.obj.nom));
        }, function (error) { return _this._errorService.handleError(error); });
    };
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-signup',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"prenom\">Pr\u00E9nom</label>\n                    <input type=\"text\" id=\"prenom\" class=\"form-control\" formControlName=\"prenom\" placeholder=\"firstname\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"nom\">Nom</label>\n                    <input type=\"text\" id=\"nom\" class=\"form-control\" formControlName=\"nom\" placeholder=\"name\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"courriel\">Courriel</label>\n                    <input type=\"email\" id=\"courriel\" class=\"form-control\" formControlName=\"courriel\" placeholder=\"my@email.com\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Mot de Passe</label>\n                    <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"password\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!signupForm.valid\">Sign Up</button>\n            </form>\n        </section>\n    "
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService, error_service_1.ErrorService, router_1.Router])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QWtDRixzQkFBQztBQUFELENBakNBLEFBaUNDLElBQUE7QUFqQ1ksdUJBQWUsa0JBaUMzQixDQUFBIiwiZmlsZSI6ImF1dGgvc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBZG1pbiB9IGZyb20gJy4uL3VzZXJzL2FkbWluJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7IFxyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ215LXNpZ251cCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwic2lnbnVwRm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmVub21cIj5QcsOpbm9tPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInByZW5vbVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZm9ybUNvbnRyb2xOYW1lPVwicHJlbm9tXCIgcGxhY2Vob2xkZXI9XCJmaXJzdG5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibm9tXCI+Tm9tPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5vbVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZm9ybUNvbnRyb2xOYW1lPVwibm9tXCIgcGxhY2Vob2xkZXI9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvdXJyaWVsXCI+Q291cnJpZWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImNvdXJyaWVsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBmb3JtQ29udHJvbE5hbWU9XCJjb3VycmllbFwiIHBsYWNlaG9sZGVyPVwibXlAZW1haWwuY29tXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+TW90IGRlIFBhc3NlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgW2Rpc2FibGVkXT1cIiFzaWdudXBGb3JtLnZhbGlkXCI+U2lnbiBVcDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHNpZ251cEZvcm06IEZvcm1Hcm91cDtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zaWdudXBGb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBwcmVub206IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIG5vbTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgY291cnJpZWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIHRoaXMuZXN0Q291cnJpZWxPS11dLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgICAgIH0pO1xyXG4gICAgIH1cclxuXHJcbiAgICAgcHJpdmF0ZSBlc3RDb3VycmllbE9LKGNvbnRyb2w6IEZvcm1Db250cm9sKToge1tjaGFpbmU6IHN0cmluZ106IGJvb2xlYW59e1xyXG4gICAgICAgICBpZighY29udHJvbC52YWx1ZS5tYXRjaChcIlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1wiKSlcclxuICAgICAgICAgICAgIHJldHVybiB7IGNvdXJyaWVsSW52YWxpZGU6IHRydWV9O1xyXG4gICAgIH1cclxuXHJcbiAgICAgb25TdWJtaXQoKXtcclxuICAgICAgICAgY29uc29sZS5sb2codGhpcy5zaWdudXBGb3JtLnZhbHVlKTtcclxuICAgICAgICAgY29uc3QgYWRtaW4gPSBuZXcgQWRtaW4odGhpcy5zaWdudXBGb3JtLnZhbHVlLmNvdXJyaWVsLCB0aGlzLnNpZ251cEZvcm0udmFsdWUucGFzc3dvcmQsIHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5wcmVub20sIHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5ub20pO1xyXG4gICAgICAgICBjb25zb2xlLmxvZygnc2lnbiB1cDogJyArIGFkbWluLmNvdXJyaWVsICsgYWRtaW4ucGFzc3dvcmQgKyBhZG1pbi5wcmVub20gKyBhZG1pbi5ub20pO1xyXG4gICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5zaWduVXAoYWRtaW4pXHJcbiAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgIGRhdGEgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdNZW1icmUgc2F1dmVnYXJkZXI6ICcgKyA8QWRtaW4+KGRhdGEub2JqLnByZW5vbSkgKyBcIiBcIiArIDxBZG1pbj4oZGF0YS5vYmoubm9tKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcclxuICAgICAgICAgICAgICk7XHJcbiAgICAgfVxyXG59Il19
