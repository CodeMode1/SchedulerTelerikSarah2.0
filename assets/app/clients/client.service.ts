import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Client } from './client';
import { Admin } from '../users/admin';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientService {
    clients: Client[] = [];

    constructor(private _http: Http) { }

    creerClient(client: Client){
        const body = JSON.stringify(client);
        const header = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/client' + token, body, {headers: header})
            .map((response: Response) => {
                const data = response.json().obj;
                let client = new Client(data._id, data.noClient, data.prenom, data.nom, data.noCompte, data.courriel, data.cell, data.compagnie, data.adresse, data.ville,
                    data.codePostal, data.telPrincipal, data.province, data.pays, data.fax, data.telSecondaire, data.memo,
                    data.memoAVenir, data.noExTaxeProv, data.noExTaxeFed, data.selectStatut, data.selectSource, data.modifPar, data.modif, 
                    data.dateDernEv, data.creerPar, data.dateCree);                
                return client;
            })
            .catch(error => Observable.throw(error.json() || 'erreur serveur'));
    }

    getClients(): Observable<Client[]>{
        return this._http.get('http://localhost:3000/client')
            .map((response: Response) => <Client[]>response.json().obj)
                .do( data => {
                    this.clients = data;
                    console.log('les clients: ' + JSON.stringify(data));
                })
                .catch(error => Observable.throw(error.json() || 'erreur serveur'));
    }
    
    getAdminLoggue(): Observable<Admin>{
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.get('http://localhost:3000/client/adminLogue' + token)
            .map((response: Response) => <Admin>response.json().obj)
            .catch(error => Observable.throw(error.json() || 'erreur serveur'));
    } 
}
