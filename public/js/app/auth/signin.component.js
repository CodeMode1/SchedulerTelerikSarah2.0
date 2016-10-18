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
var admin_1 = require('../users/admin');
var auth_service_1 = require('./auth.service');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var error_service_1 = require('../errors/error.service');
var SigninComponent = (function () {
    function SigninComponent(_formBuilder, _authService, _router, _errorService) {
        this._formBuilder = _formBuilder;
        this._authService = _authService;
        this._router = _router;
        this._errorService = _errorService;
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
        var admin = new admin_1.Admin(this.signinForm.value.courriel, this.signinForm.value.password);
        console.log('sign in: ' + admin.courriel + admin.password);
        this._authService.signIn(admin)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('adminId', data.adminId);
            //this._router.navigateByUrl('/');
        }, function (error) { return _this._errorService.handleError(error); });
    };
    SigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-signin',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <form [formGroup]=\"signinForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"courriel\">Courriel</label>\n                    <input type=\"email\" id=\"courriel\" class=\"form-control\" formControlName=\"courriel\" placeholder=\"my@email.com\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"password\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!signinForm.valid\">Sign In</button>\n            </form>\n        </section>\n    "
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService, router_1.Router, error_service_1.ErrorService])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHNCQUFzQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3ZDLDZCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHNCQUFnRSxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2pGLDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBcUJ2RDtJQUdJLHlCQUFvQixZQUF5QixFQUFVLFlBQXlCLEVBQVUsT0FBZSxFQUFVLGFBQTJCO1FBQTFILGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7SUFBSSxDQUFDO0lBRW5KLGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3RDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN6RCxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDdEMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOztNQUVFO0lBQ00sdUNBQWEsR0FBckIsVUFBc0IsT0FBb0I7UUFDdEMsRUFBRSxDQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyx1SUFBdUksQ0FBQyxDQUFDO1lBQzdKLE1BQU0sQ0FBQyxFQUFDLGdCQUFnQixFQUFFLElBQUksRUFBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFaRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUMxQixTQUFTLENBQ04sVUFBQSxJQUFJO1lBQ0EsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5QyxrQ0FBa0M7UUFDdEMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBcERMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsazBCQWNUO1NBQ0osQ0FBQzs7dUJBQUE7SUFtQ0Ysc0JBQUM7QUFBRCxDQWxDQSxBQWtDQyxJQUFBO0FBbENZLHVCQUFlLGtCQWtDM0IsQ0FBQSIsImZpbGUiOiJhdXRoL3NpZ25pbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBZG1pbiB9IGZyb20gJy4uL3VzZXJzL2FkbWluJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3Iuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ215LXNpZ25pbicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwic2lnbmluRm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb3VycmllbFwiPkNvdXJyaWVsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJjb3VycmllbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZm9ybUNvbnRyb2xOYW1lPVwiY291cnJpZWxcIiBwbGFjZWhvbGRlcj1cIm15QGVtYWlsLmNvbVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgW2Rpc2FibGVkXT1cIiFzaWduaW5Gb3JtLnZhbGlkXCI+U2lnbiBJbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbmluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHNpZ25pbkZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgXHJcbiAgICAgICAgdGhpcy5zaWduaW5Gb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBjb3VycmllbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgdGhpcy5lc3RDb3VycmllbE9LXV0sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogcmV0b3VybmUgMSBqdXN0ZSBxdWFuZCBsZSBjb3VycmllbCBlc3QgdmFsaWRlIFxyXG4gICAgICAgcmVnIGV4cCBmaWFibGUgw6AgOTkuOSVcclxuICAgICovXHJcbiAgICBwcml2YXRlIGVzdENvdXJyaWVsT0soY29udHJvbDogRm9ybUNvbnRyb2wpOiB7W2NoYWluZTogc3RyaW5nXTogYm9vbGVhbn17XHJcbiAgICAgICAgaWYoIWNvbnRyb2wudmFsdWUubWF0Y2goXCJbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cIikpXHJcbiAgICAgICAgICAgIHJldHVybiB7Y291cnJpZWxJbnZhbGlkZTogdHJ1ZX07XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNpZ25pbkZvcm0udmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IGFkbWluID0gbmV3IEFkbWluKHRoaXMuc2lnbmluRm9ybS52YWx1ZS5jb3VycmllbCwgdGhpcy5zaWduaW5Gb3JtLnZhbHVlLnBhc3N3b3JkKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2lnbiBpbjogJyArIGFkbWluLmNvdXJyaWVsICsgYWRtaW4ucGFzc3dvcmQpO1xyXG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnNpZ25JbihhZG1pbilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhZG1pbklkJywgZGF0YS5hZG1pbklkKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59Il19
