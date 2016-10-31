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
            //id du logged in user : console.log(localStorage.getItem('userId'));
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHFCQUFxQixlQUFlLENBQUMsQ0FBQTtBQUNyQyw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3Qyx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6QyxzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRiwrQkFBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQXFCMUQ7SUFHSSx5QkFBb0IsWUFBeUIsRUFBVSxZQUF5QixFQUFVLE9BQWUsRUFBVSxjQUE2QjtRQUE1SCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO0lBQUksQ0FBQztJQUVySixrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUN0QyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDekQsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3RDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7TUFFRTtJQUNNLHVDQUFhLEdBQXJCLFVBQXNCLE9BQW9CO1FBQ3RDLEVBQUUsQ0FBQSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsdUlBQXVJLENBQUMsQ0FBQztZQUM3SixNQUFNLENBQUMsRUFBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQWNDO1FBYkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDekIsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMscUVBQXFFO1lBQ3JFLGtDQUFrQztRQUN0QyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBdkMsQ0FBdUMsQ0FDbkQsQ0FBQztJQUNWLENBQUM7SUFyREw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxrMEJBY1Q7U0FDSixDQUFDOzt1QkFBQTtJQW9DRixzQkFBQztBQUFELENBbkNBLEFBbUNDLElBQUE7QUFuQ1ksdUJBQWUsa0JBbUMzQixDQUFBIiwiZmlsZSI6ImF1dGgvc2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi91c2Vycy91c2VyJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBFcnJldXJTZXJ2aWNlIH0gZnJvbSAnLi4vZXJyZXVycy9lcnJldXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ215LXNpZ25pbicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwic2lnbmluRm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb3VycmllbFwiPkNvdXJyaWVsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJjb3VycmllbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZm9ybUNvbnRyb2xOYW1lPVwiY291cnJpZWxcIiBwbGFjZWhvbGRlcj1cIm15QGVtYWlsLmNvbVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgW2Rpc2FibGVkXT1cIiFzaWduaW5Gb3JtLnZhbGlkXCI+U2lnbiBJbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbmluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHNpZ25pbkZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2VycmV1clNlcnZpY2U6IEVycmV1clNlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkgeyBcclxuICAgICAgICB0aGlzLnNpZ25pbkZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgIGNvdXJyaWVsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCB0aGlzLmVzdENvdXJyaWVsT0tdXSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiByZXRvdXJuZSAxIGp1c3RlIHF1YW5kIGxlIGNvdXJyaWVsIGVzdCB2YWxpZGUgXHJcbiAgICAgICByZWcgZXhwIGZpYWJsZSDDoCA5OS45JVxyXG4gICAgKi9cclxuICAgIHByaXZhdGUgZXN0Q291cnJpZWxPSyhjb250cm9sOiBGb3JtQ29udHJvbCk6IHtbY2hhaW5lOiBzdHJpbmddOiBib29sZWFufXtcclxuICAgICAgICBpZighY29udHJvbC52YWx1ZS5tYXRjaChcIlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1wiKSlcclxuICAgICAgICAgICAgcmV0dXJuIHtjb3VycmllbEludmFsaWRlOiB0cnVlfTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2lnbmluRm9ybS52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKHRoaXMuc2lnbmluRm9ybS52YWx1ZS5jb3VycmllbCwgdGhpcy5zaWduaW5Gb3JtLnZhbHVlLnBhc3N3b3JkKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2lnbiBpbjogJyArIHVzZXIuY291cnJpZWwgKyB1c2VyLnBhc3N3b3JkKTtcclxuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5zaWduSW4odXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCBkYXRhLnVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZCBkdSBsb2dnZWQgaW4gdXNlciA6IGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2VycmV1clNlcnZpY2UuaGFuZGxlRXJyZXVyKGVycm9yKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59Il19
