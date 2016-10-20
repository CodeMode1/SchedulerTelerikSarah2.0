import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientService } from './client.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Client } from './client';
import { ErreurService } from '../erreurs/erreur.service';

interface ResultatValidation {
    [cle: string]: boolean;
}

@Component({
    moduleId: module.id,
    selector: 'my-edit-client',
    templateUrl:'client-edit.component.html',
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
        .alert-success{
            text-align:center;
        }
    `
    ]
})
export class EditClientComponent implements OnInit {
    identification: string;
    gestion: string;
    editClientForm: FormGroup;
    formCopie: boolean;
    formActualiser: boolean;
    modeSoumission: boolean;
    sauvegardeClient: boolean;
    myClient : Client;
    clientId: string;

    constructor(private _formBuilder: FormBuilder, private _clientService: ClientService, private _erreurService: ErreurService) {
        this.identification = "Identification";
        this.gestion = "Gestion";
        this.myClient = new Client();
        this.formActualiser = false;
        this.formCopie = false;
        this.modeSoumission = true;
        this.sauvegardeClient = false;
     }

    ngOnInit() { 
         this.editClientForm = this._formBuilder.group({
            noClient: [''],
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
        
        //this.testCP();
    }

    formatCP(input){
        //j'enleve les espaces, globalement.
        var chaine = input.value.replace(/\s+/g, "");
        //pour ajouter l'espace au 3eme carac.
        if(chaine.length > 3){
            //je place l'espace à la bonne place.
            chaine = chaine.substr(0,3) + " " + chaine.substr(3,3);
        }
        //transformer le code Postal en majuscule.
        input.value = chaine.toUpperCase();
    }

    formatTP(input){
        // j'enleve tout ce qui n'est pas chiffre, globalement.
        var chaine = input.value.replace(/[^0-9]/g, "");
        console.log(chaine);

        //au 11eme carac tapé, je reconstruis le tel avec ses bons chiffres.
        if(chaine.length > 10){
            chaine = chaine.substr(1,3) + chaine.substr(5,3) + chaine.substr(9,4);
        }

        //au 10eme carac, je formatte selon (XXX)XXX-XXXX.
        if(chaine.length === 10){
            chaine = "(" + chaine.substr(0,3) + ")" + chaine.substr(3,3) + "-" + chaine.substr(6,4);
        }
        
        /* si ces if sont inversés, chaine non-formattée.
           car au 10eme carac : 
           chaine.length > 10 et donc la chaine revient non-formattée.
        */
        input.value = chaine;
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

         //validation réussie
         return null;
    }

    onSubmit(){
        //change mode modification, enable bouton Acutaliser et Copier.
        this.modeSoumission = false;
        this.formActualiser = true;
        this.formCopie = true;
        console.log(this.editClientForm.value);
        console.log('creer Client: ' + this.myClient.prenom + " " + this.myClient.nom + " " + this.myClient.courriel);
        this._clientService.creerClient(this.myClient)
            .subscribe(
                data => { 
                    console.log('data du serveur :');
                    console.log(data);
                    this.myClient = data;
                    //sauver le _id qui revient dans le client créé par Mongo.
                    this.clientId = data.clientId;
                    console.log("id de "+ data.nom + " : " + this.clientId);
                    console.log("no de client : " + data.noClient);
                    this.myClient.noClient = data.noClient;
                    this.sauvegardeClient = true;
            },
                error => this._erreurService.handleErreur(error)
            );
    
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
}









