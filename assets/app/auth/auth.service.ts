import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Admin } from '../users/admin';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

    constructor( private _http: Http) { }

    signUp(admin: Admin){
        const body = JSON.stringify(admin);
        const header = new Headers({'Content-Type': 'application/json'});
        return this._http.post('http://localhost:3000/admin', body, {headers: header})
            .map((response: Response) => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    signIn(admin: Admin){
        const body = JSON.stringify(admin);
        const header = new Headers({'Content-Type': 'application/json'});
        return this._http.post('http://localhost:3000/admin/signin', body, {headers: header})
            .map((response: Response) => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    //flush jeton et adminId côté client
    logOut(){
        localStorage.clear();
    }

    //si un admin est loggé
    estLogIn(){
        return localStorage.getItem('token') !== null;
    }
}