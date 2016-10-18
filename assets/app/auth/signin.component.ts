import { Component, OnInit } from '@angular/core';
import { Admin } from '../users/admin';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ErrorService } from '../errors/error.service';

@Component({
    moduleId: module.id,
    selector: 'my-signin',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form [formGroup]="signinForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label for="courriel">Courriel</label>
                    <input type="email" id="courriel" class="form-control" formControlName="courriel" placeholder="my@email.com">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="form-control" formControlName="password" placeholder="password">
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="!signinForm.valid">Sign In</button>
            </form>
        </section>
    `
})
export class SigninComponent implements OnInit {
    signinForm: FormGroup;

    constructor(private _formBuilder: FormBuilder, private _authService: AuthService, private _router: Router, private _errorService: ErrorService) { }

    ngOnInit() { 
        this.signinForm = this._formBuilder.group({
            courriel: ['', [Validators.required, this.estCourrielOK]],
            password: ['', Validators.required]
        });
    }

    /* retourne 1 juste quand le courriel est valide 
       reg exp fiable à 99.9%
    */
    private estCourrielOK(control: FormControl): {[chaine: string]: boolean}{
        if(!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"))
            return {courrielInvalide: true};
    }

    onSubmit(){
        console.log(this.signinForm.value);
        const admin = new Admin(this.signinForm.value.courriel, this.signinForm.value.password);
        console.log('sign in: ' + admin.courriel + admin.password);
        this._authService.signIn(admin)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('adminId', data.adminId);
                    //this._router.navigateByUrl('/');
                },
                error => this._errorService.handleError(error)
            );
    }
}