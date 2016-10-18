import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Admin } from '../users/admin';
import { AuthService } from './auth.service'; 
import { ErrorService } from '../errors/error.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-signup',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label for="prenom">Prénom</label>
                    <input type="text" id="prenom" class="form-control" formControlName="prenom" placeholder="firstname">
                </div>
                <div class="form-group">
                    <label for="nom">Nom</label>
                    <input type="text" id="nom" class="form-control" formControlName="nom" placeholder="name">
                </div>
                <div class="form-group">
                    <label for="courriel">Courriel</label>
                    <input type="email" id="courriel" class="form-control" formControlName="courriel" placeholder="my@email.com">
                </div>
                <div class="form-group">
                    <label for="password">Mot de Passe</label>
                    <input type="password" id="password" class="form-control" formControlName="password" placeholder="password">
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="!signupForm.valid">Sign Up</button>
            </form>
        </section>
    `
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    
    constructor(private _formBuilder: FormBuilder, private _authService: AuthService, 
        private _errorService: ErrorService, private _router: Router) { }

    ngOnInit() {
        this.signupForm = this._formBuilder.group({
            prenom: ['', Validators.required],
            nom: ['', Validators.required],
            courriel: ['', [Validators.required, this.estCourrielOK]],
            password: ['', Validators.required]
        });
     }

     private estCourrielOK(control: FormControl): {[chaine: string]: boolean}{
         if(!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"))
             return { courrielInvalide: true};
     }

     onSubmit(){
         console.log(this.signupForm.value);
         const admin = new Admin(this.signupForm.value.courriel, this.signupForm.value.password, this.signupForm.value.prenom, this.signupForm.value.nom);
         console.log('sign up: ' + admin.courriel + admin.password + admin.prenom + admin.nom);
         this._authService.signUp(admin)
             .subscribe(
                 data => { 
                     console.log(data);
                     alert('Membre sauvegarder: ' + <Admin>(data.obj.prenom) + " " + <Admin>(data.obj.nom));
                },
                 error => this._errorService.handleError(error)
             );
     }
}