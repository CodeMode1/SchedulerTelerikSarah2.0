import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientService } from './client.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Client } from './client';
import { ErrorService } from '../errors/error.service';
import { Admin } from '../users/admin';

interface ResultatValidation {
    [cle: string]: boolean;
}

@Component({
    moduleId: module.id,
    selector: 'my-creer-client',
    template:`
    <section class="col-md-12 space">
        <form [formGroup]="creerClientForm" (ngSubmit)="onSubmit()">
        <section class="col-md-6">
                <div class="col-md-12 title">
                    <h2>{{identification}}</h2>
                </div>
                <div class="col-md-12 outer">
                    <div class="col-md-6 form-group">
                        <label for="prenom">Prénom</label>
                        <input type="text" id="prenom" class="form-control" formControlName="prenom" placeholder="firstname" [(ngModel)]="this.myClient.prenom">
                    </div>
                    <div class="col-md-6 form-group">
                        <label for="nom">Nom</label>
                        <input type="text" id="nom" class="form-control" formControlName="nom" placeholder="name" [(ngModel)]="this.myClient.nom">
                    </div>
                </div>
                <div class="col-md-12 outer">
                    <div class="col-md-6 form-group">
                        <label for="noCompte">No Compte</label>
                        <input type="text" id="noCompte" class="form-control" formControlName="noCompte" placeholder="account #" [(ngModel)]="this.myClient.noCompte">
                    </div>
                    <div class="col-md-6 form-group">
                        <label for="courriel">Courriel</label>
                        <input type="email" id="courriel" class="form-control" placeholder="my@email.com" formControlName="courriel" [(ngModel)]="this.myClient.courriel">
                    </div>
                </div>
                <div class="col-md-12 outer">
                    <div class="col-md-6 form-group">
                        <label for="cell">Cellulaire</label>
                        <input type="text" id="cell" class="form-control" formControlName="cell" placeholder="cell #" [(ngModel)]="this.myClient.cell">
                    </div>
                    <div class="col-md-6 form-group">
                        <label for="compagnie">Compagnie</label>
                        <input type="text" id="compagnie" class="form-control" formControlName="compagnie" placeholder="business" [(ngModel)]="this.myClient.compagnie">
                    </div>
                </div>
                <div class="col-md-12 outer">
                    <div class="col-md-6 form-group">
                        <label for="adresse">Adresse</label>
                        <input type="text" id="adresse" class="form-control" formControlName="adresse" placeholder="adress" [(ngModel)]="this.myClient.adresse">
                    </div>
                    <div class="col-md-6 form-group">
                        <label for="ville">Ville</label>
                        <input type="text" id="ville" class="form-control" formControlName="ville" placeholder="city" [(ngModel)]="this.myClient.ville">
                    </div>
                </div>
                <div class="col-md-12 outer">
                    <div class="col-md-6 form-group">
                        <label for="codePostal">Code Postal</label>
                        <input type="text" #inputCP (input)="formatCP(inputCP)" id="codePostal" class="form-control" formControlName="codePostal" placeholder="postal code" [(ngModel)]="this.myClient.codePostal">
                        <p class="text-danger" [hidden]="creerClientForm.controls.codePostal.valid || (creerClientForm.controls.codePostal.pristine)">
                            Invalide. D, F, I, O, Q, U, W, Z Invalide. Example: H2S 0B5.
                        </p>
                    </div>
                    <div class="col-md-6 form-group">
                        <label for="telPrincipal">Tél. Principal</label>
                        <input type="text" #inputTP (input)="formatTP(inputTP)" id="telPrincipal" class="form-control" formControlName="telPrincipal" placeholder="main #" [(ngModel)]="this.myClient.telPrincipal">
                        <p class="text-danger" [hidden]="creerClientForm.controls.telPrincipal.valid || (creerClientForm.controls.telPrincipal.pristine)">
                            Invalide. Tél à 10 chiffres. Example: (514)123-4567.
                        </p>
                    </div>
                </div>
                <div class="col-md-12 outer">
                    <div class="col-md-6 form-group">
                        <label for="province">Province</label>
                        <input type="text" id="province" class="form-control" formControlName="province" placeholder="province" [(ngModel)]="this.myClient.province">
                    </div>
                    <div class="col-md-6 form-group">
                        <label for="pays">Pays</label>
                        <input type="text" id="pays" class="form-control" formControlName="pays" placeholder="country" [(ngModel)]="this.myClient.pays">
                    </div>
                </div>
                <div class="col-md-12 outer">
                    <div class="col-md-6 form-group">
                        <label for="fax">Fax</label>
                        <input type="text" id="fax" class="form-control" formControlName="fax" placeholder="fax #" [(ngModel)]="this.myClient.fax">
                    </div>
                    <div class="col-md-6 form-group">
                        <label for="telSecondaire">Tél. Secondaire</label>
                        <input type="text" id="telSecondaire" class="form-control" formControlName="telSecondaire" placeholder="second #" [(ngModel)]="this.myClient.telSecondaire">
                    </div>
                </div>
            </section>
            <section class="col-md-2">
            </section>
            <section class="col-md-4">
                <div class="col-md-12 title">
                    <h2>{{gestion}}</h2>
                </div>
                <div class="col-md-6 outer">
                    <div class="col-md-12 memo">
                        <label for="labelMemo">Mémo</label>
                        <textarea id="labelMemo" class="form-control" rows="10" formControlName="memo" [(ngModel)]="this.myClient.memo"></textarea>
                    </div>
                    <div class="col-md-12 memo">
                        <label for="labelMess">Message important pour évènement à venir</label>
                        <textarea id="labelMess" class="form-control" rows="10" formControlName="memoAVenir" [(ngModel)]="this.myClient.memoAVenir"></textarea>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="col-md-12 gestionInputs">
                        <label for="noExTaxeProv">No exemption taxe provinciale</label>
                        <input type="text" id="noExTaxeProv" class="form-control" formControlName="noExTaxeProv" [(ngModel)]="this.myClient.noExTaxeProv">
                    </div>
                    <div class="col-md-12 gestionInputs">
                        <label for="noExTaxeFed">No exemption taxe fédérale</label>
                        <input type="text" id="noExTaxeFed" class="form-control" formControlName="noExTaxeFed" [(ngModel)]="this.myClient.noExTaxeFed">
                    </div>
                    <div class="col-md-12 gestionInputs">
                        <label for="selectStatut">Satut du client</label>
                        <select class="form-control" id="selectStatut" formControlName="selectStatut" [(ngModel)]="this.myClient.selectStatut">
                            <option>Client passé</option>
                            <option>Client actuel</option>
                            <option>Client récurrent</option>
                            <option>Client à solliciter</option>
                            <option>Client sollicité</option>
                            <option>Client VIP</option>
                        </select>
                    </div>
                    <div class="col-md-12 gestionInputs">
                        <label for="selectSource">Source</label>
                        <select class="form-control" id="selectSource" formControlName="selectSource" [(ngModel)]="this.myClient.selectSource">
                            <option>Internet</option>
                            <option>Bouche-à-oreille</option>
                            <option>Journaux et Magazines</option>
                            <option>Télévision</option>
                            <option>Travail</option>
                            <option>Autres</option>
                        </select>
                    </div>     
                    <div class="col-md-12 gestionInputs">
                        <label for="modifPar">Modifié par</label>
                        <input type="text" id="modifPar" class="form-control" formControlName="modifPar" readonly [(ngModel)]="this.myClient.modifPar">
                    </div>
                    <div class="col-md-12 gestionInputs">
                        <label for="modif">Modifié</label>
                        <input type="text" id="modif" class="form-control" formControlName="modif" readonly [(ngModel)]="this.myClient.modif">
                    </div>
                    <div class="col-md-12 gestionInputs">
                        <label for="dateDernEv">Date Dernier Évènement</label>
                        <input type="text" id="dateDernEv" class="form-control" formControlName="dateDernEv" readonly [(ngModel)]="this.myClient.dateDernEv">
                    </div>
                    <div class="col-md-12 gestionInputs">
                        <label for="creePar">Créé par</label>
                        <input type="text" id="creePar" class="form-control" formControlName="creePar" readonly [(ngModel)]="this.myClient.creerPar">
                    </div>
                    <div class="col-md-12 gestionInputs">
                        <label for="cree">Créé</label>
                        <input type="text" id="cree" #dateCree class="form-control" formControlName="cree" readonly [(ngModel)]="this.myClient.dateCree">
                    </div>
                </div>
            </section>
            <div class="col-md-12 footer space">
                <div class="col-md-4 divFooter">
                    <button type="button" class="btn btn-primary" [disabled]="!formActualiser">
                        <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>
                        Actualiser
                    </button>
                </div>
                <div class="col-md-4 divFooter">
                    <button type="submit" class="btn btn-primary" [disabled]="!creerClientForm.valid || !modeSoumission">
                        <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>
                        Enregistrer
                    </button>
                </div>
                <div class="col-md-4 divFooter">
                    <button type="button" class="btn btn-primary" [disabled]="!formCopie">
                        <span class="glyphicon glyphicon-print" aria-hidden="true"></span>
                        Copie Client
                    </button>
                </div>
            </div>
        </form>
    </section>
    

    `,
    styles: [`
        .outer{
            float:left;
            clear:both;
            padding: 0 0 1% 0;
        }
        
        .form-group{
            float:left;
        }

        .divFooter{
            text-align:center;
        }

        .footer{
            border-top: 2px solid black;
        }

        button{  
            display:block;
            margin: 0 auto;
        }

        .space {
            padding: 2%;
        }

        h2{
            padding-top:1%;
            padding-bottom:2%;
        }

        .title{
            text-align:left;
        }

        .memo{
            float: left;
            clear: both;
            padding: 0 0 2% 0;
        }

        textarea{
            resize: none;
        }

        .gestionInputs{
            float: left;
            clear: both;
        }

        .dropdown{
            padding:0;
        }
    `
    ]
})
export class CreerClientComponent implements OnInit {
    identification: string = "Identification";
    gestion: string = "Gestion";
    creerClientForm: FormGroup;
    adminFullNom: string;
    date: string;
    myClient : Client;
    formCopie: boolean;
    formActualiser: boolean;
    modeSoumission: boolean;
    clientId: string;

    constructor(private _formBuilder: FormBuilder, private _clientService: ClientService, private _errorService: ErrorService) {
        //this.date = "";
        this.myClient = new Client();
        this.formActualiser = false;
        this.formCopie = false;
        this.modeSoumission = true;
     }

    ngOnInit() { 
         this.creerClientForm = this._formBuilder.group({
            prenom: [''],
            nom: ['', Validators.required],
            noCompte: [''],
            courriel: ['',  this.estCourrielOK],
            cell: [''],
            compagnie: [''],
            adresse: [''],
            ville: [''],
            codePostal: ['', this.estCodePostalOK],
            telPrincipal: ['', this.estTelephoneOK],
            province: [''],
            pays: [''],
            fax: [''],
            telSecondaire: [''],
            memo: [''],
            memoAVenir: [''],
            noExTaxeProv: [''],
            noExTaxeFed: [''],
            selectStatut: [''],
            selectSource: [''], 
            modifPar: [''],
            modif: [''],
            dateDernEv: [''],
            creePar: [''],
            cree: ['']    
        });
        
        //this.getCreePar();
        //this.testCP();
    }

    formatCP(input){
        //j'enleve les espaces, globalement
        var chaine = input.value.replace(/\s+/g, "");
        //pour ajouter l'espace au 3eme carac
        if(chaine.length > 3){
            //je place l'espace à la bonne place
            chaine = chaine.substr(0,3) + " " + chaine.substr(3,3);
        }
        //transformer le code Postal en majuscule
        input.value = chaine.toUpperCase();
    }

    formatTP(input){
        // j'enleve les espaces et les hyphens, globalement
        var chaine = input.value.replace(/\s+|\u002D+/g, "");
        console.log(chaine);

        //au 11eme carac tapé, je reconstruis le tel avec ses bons chiffres 
        if(chaine.length > 10){
            chaine = chaine.substr(1,3) + chaine.substr(5,3) + chaine.substr(9,4);
        }

        //au 10eme carac, je formatte selon (XXX)XXX-XXXX
        if(chaine.length === 10){
            chaine = "(" + chaine.substr(0,3) + ")" + chaine.substr(3,3) + "-" + chaine.substr(6,4);
        }
        
        /* si ces if sont inversés, chaine non-formattée
           car au 10eme carac : 
           chaine.length > 10 et donc la chaine revient non-formattée.
        */
        input.value = chaine;
    }

    private testCP(){
        //retoune null (valide)
            //console.log(this.estCodePostalOK('H2S 0B5')); //ok
            //console.log(this.estCodePostalOK('h2s 0b5')); //ok
            //console.log(this.estCodePostalOK('h2s0b5'));  //ok

        //retourne true (fail)
            //console.log(this.estCodePostalOK('Z3V H2S')); //Ok
            //console.log(this.estCodePostalOK('z3vh2s'));  //ok
            //console.log(this.estCodePostalOK('B3V H2'));  //ok
    }

    private estCodePostalOK(control: FormControl): ResultatValidation{
        //validation a réussi: pas de valeur tapée
        if(!control.value){
            return null;
        }
        /*format regex canadien :
            ^ : chaine commence, $ : fin séquence
            lettre : pas de D, F, I, O, Q U
            1er lettre: pas de W, Z, chiffre: \d, lettre, blanc, chiffre, lettre, chiffre
        */
        var regexCP =  /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ][ ]\d[ABCEGHJKLMNPRSTVWXYZ]\d$/;
        if(!control.value.match(regexCP)){
            return {codePostalInvalide: true};
        }

        //validation résussie
        return null;
    }

    private estTelephoneOK(control: FormControl): ResultatValidation{
        if(!control.value){
            return null;
        }
        /* format regex canadien:
           ^ : sequence commence, $ : fin sequence
           ( , chiffre(x3), ) , chiffre (x3), - , chiffre (x4)
        */ 
        var regexTP = /^\u0028\d{3}\u0029\d{3}\u002D\d{4}$/;
        if(!control.value.match(regexTP)){
            return {telephoneInvalide: true};
        }
        
        //validation réussie
        return null;
    }


    //validation: retourne null si valide et un boolean si erreur.
     private estCourrielOK(control: FormControl): ResultatValidation{
         if (control.value) {
            var regexCourriel = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            if(!control.value.match(regexCourriel))
                return {courrielInvalide: true};
         }

         //validation résussie
         return null;
    }

    onSubmit(){
        this.modeSoumission = false;
        this.formActualiser = true;
        this.formCopie = true;
        console.log(this.creerClientForm.value);
        /*const client = new Client(this.creerClientForm.value.prenom, this.creerClientForm.value.nom, this.creerClientForm.value.noCompte, 
            this.creerClientForm.value.courriel, this.creerClientForm.value.cell, this.creerClientForm.value.compagnie, this.creerClientForm.value.adresse,
            this.creerClientForm.value.ville, this.creerClientForm.value.codePostal, this.creerClientForm.value.telPrincipal, this.creerClientForm.value.province,
            this.creerClientForm.value.pays, this.creerClientForm.value.fax, this.creerClientForm.value.telSecondaire, this.creerClientForm.value.memo, this.creerClientForm.value.memoAVenir,
            this.creerClientForm.value.noExTaxeProv, this.creerClientForm.value.noExTaxeFéd, this.creerClientForm.value.selectStatut, this.creerClientForm.value.selectSource,
            null, null, this.creerClientForm.value.dateDernEv, this.creerClientForm.value.creePar);
            */
        console.log('creer Client: ' + this.myClient.prenom + " " + this.myClient.nom + " " + this.myClient.courriel);
        this._clientService.creerClient(this.myClient)
            .subscribe(
                data => { 
                    console.log('data du serveur :');
                    console.log(data);
                    //ne fonctionne pas : this._clientService.clients.push(data);
                    this.myClient = data;
                    console.log("id de "+ data.nom + " : " + data.clientId);
                    this.clientId = data.clientId;
                    console.log("id de "+ data.nom + " : " + this.clientId);
                    console.log("no de client : " + data.noClient);
                    this.myClient.noClient = data.noClient;
                    // this.adminFullNom = data.creerPar;
                    //this.date = data.dateCree;
                    // TODO Sauver le _id qui revient dans le client créé par Mongo.
                    // TODO Change mode modification, enable bouton Acutaliser et Copier.
                    alert('Client sauvegarder: ' + <Client>(data.prenom) + " " + <Client>(data.nom));
            },
                error => this._errorService.handleError(error)
            );
    
    }


/*
private toDateString(date: Date): string {
        return (date.getFullYear().toString() + '-' 
           + ("0" + (date.getMonth() + 1)).slice(-2) + '-' 
           + ("0" + (date.getDate())).slice(-2)) + " "
           + date.toTimeString().slice(0,5);

    }
    */

    /*
    getCreePar(){
        //var monObjet_json = localStorage.getItem("token");
        //var monObjet = JSON.parse(monObjet_json);
        //console.log(monObjet);
        //this.admin = <Admin>JSON.parse(localStorage.getItem('admin'));
        //this.adminFullNom = this.admin.nom;

        //var monObjet_json = localStorage.getItem('token');
        //var monObg = JSON.parse(monObjet_json);
        //console.log(monObg);

        this._clientService.getAdminLoggue().subscribe(
            data => { 
                var admin: Admin;
                admin = data;
                this.adminFullNom = admin.prenom +  " " + admin.nom;
                console.log(admin);
            },
            error => this._errorService.handleError(error)
        );
    }
    */
    //[value]="inputCP.value.toUpperCase()" (change)="addSpace(this)"
}







