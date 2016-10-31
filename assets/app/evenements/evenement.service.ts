import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Evenement } from './evenement';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EvenementService implements OnInit {
    evenements: Evenement[] = [];
    nomUsageLogue: string;

    constructor( private _http: Http) { }

    ngOnInit(){

    }

    getEvenements(): Observable<Evenement[]>{
        return this._http.get('http://localhost:3000/evenement')
            .map((response: Response) => {
                const data = response.json().obj;
                let objs: any[] = [];
                for(let i=0; i < data.length; i++){
                    let evenement = new Evenement(data[i]._id, data[i].noEvenement, data[i].nom,
                        data[i].dateEvenement, data[i].contact, data[i].client_FK.prenom + " " + data[i].client_FK.nom,
                        data[i].selectEtat, data[i].dateSoumission, data[i].dateConfirmation, data[i].dateFacturation,
                        data[i].dateNonRetenu, data[i].dateAnnulation, data[i].notes, data[i].validationTache,
                        data[i].creerPar, data[i].dateCree, data[i].modifPar, data[i].modif);
                        objs.push(evenement);
                        console.log('les evx construit dans le service: ' + JSON.stringify(evenement));    
                };
                // mettre a jour le array d'evx du service
                this.evenements = objs;
                console.log("array du service: " + this.evenements);
                return objs;
            })
            .catch(error => Observable.throw(error.json() || 'erreur servuer'));
    }
}