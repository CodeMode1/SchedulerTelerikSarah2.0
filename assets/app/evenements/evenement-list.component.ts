import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Evenement } from './evenement';
import { ErreurService } from '../erreurs/erreur.service';
import { EvenementService } from './evenement.service';


@Component({
    moduleId: module.id,
    selector: 'my-evenement-list',
    templateUrl: 'evenement-list.component.html',
    styles: [`
        section{
            padding: 2% 0 0 0;
        }

        td, th{
            text-align: center;
            font-size: 1vw;
        }

        thead > tr{
            background-color: #fafafa;
            border-bottom: 0.25em solid #1565c0;
        }

        tbody > tr:hover{
            background-color: #a9d4f9;
        }

        tbody > tr{
            border-bottom: 0.2em solid #ddd;
        }

        .estSelectRange{
             background-color: #519BDB;
         }

         h3{
            padding: 0.5% 0 0.5% 0;
            margin:0;
            font-size: 1.5vw;
        }

        .panel-heading{
            text-align:center;
        }

        .bg-danger{
            text-align: center;
            color: #CC0000;
            font-weight: bolder;
            font-size: 1vw;
        }

        #searchLabel{
            margin-bottom:0;
            text-align:left;
            padding: 0;
        }

        #erreurContrat{
            text-align: center;
            padding: 0 5% 0 0;
        }

         #erreurFullSearch {
            clear: both;
            float: left;
        }

        .size{
            font-size:1vw;
            text-align:center;
        }

        .disableA{
            pointer-events: none;
            cursor: default;
            color: #ddd;
        }

        .erreurSearchNoContrat, .erreurSpecialSearch{
            background: #ff8080;
        }

        #boutonSearchNoContrat{
            background: #519BDB;
        }

        #boutonSpecialSearch{
            clear: both;
            float: left;
            background: #519BDB;
        }

        a{
            color: #000;
            display: block;
            clear: both;
            position: relative;
        }

        a span{
            position: absolute;
            display:none;
            background: rgba(20, 20, 31, 0.84);
            text-align: center;
            border-left: 1px solid #111;
            border-top: 1px solid #111;
            border-right: 1px solid #333;
            border-bottom: 1px solid #333;
            border-radius: 3px;
            color: #fff;
            font-size: 0.7em;
            text-indent: 0;
            width: auto;
            height:auto;
        }

        a span:after{
            content: ' ';
	        height: 0;
	        position: absolute;
	        width: 0;
            border: 10px solid transparent;
	        border-top-color: #333;
            top: 100%;
	        left: 10px;
        }

        a:hover span{
            display: block;
            bottom: 1vw;
            left:75%;
            z-index: 9999;
            -moz-animation: moveTooltip .25s linear;
            -webkit-animation: moveTooltip .25s linear;
        }

        a:hover{
            color: #337ab7;
        }

        .widgets{
            display: inline-block;
            padding-right: 5%;
        }

        .divFooter{
            text-align:center;
        }

        .col-md-12 {
            padding: 2%;
        }

        @-moz-keyframes moveTooltip {
    0% {
        -moz-transform: scale(0,0);
        opacity: 0;
    }

    45% {
        -moz-transform: scale(0.4,0.4);
        opacity: 0.7;
    }

    75% {
        -moz-transform: scale(1.3,1.3);
        opacity: 0.4;
    }

    100% {
        -moz-transform: scale(1,1);
        opacity: 1;
    };
}

@-webkit-keyframes moveTooltip {
    0% {
        -webkit-transform: scale(0,0);
        opacity: 0;
    }

    45% {
        -webkit-transform: scale(0.4,0.4);
        opacity: 0.7;
    }

    75% {
        -webkit-transform: scale(1.3,1.3);
        opacity: 0.4;
    }

    100% {
        -webkit-transform: scale(1,1);
        opacity: 1;
    };
} 
    `]
})
export class EvenementListComponent implements OnInit {
    titre: string;
    evenements: Evenement[];
    evenementSelected: Evenement;
    noEvenement: number;
    // search No Contrat
    boolSearchContrat: boolean;
    noContratTextSearch: string;
    erreurNoContrat: string;
    // search Full Text
    boolFullSearch: boolean;
    specialTextSearch: string;
    erreurSpecialSearch: string;
    // fenêtre modal
    confirmImp: boolean;
    titreModal: string;
    constructor( private _erreurService: ErreurService, private _evenementService: EvenementService) {
        this.titre = "Liste des Évènements";
        this.noContratTextSearch = ""; 
        this.boolSearchContrat = false; 
        this.erreurNoContrat = "";
        this.specialTextSearch = "";
        this.erreurSpecialSearch = "";
        this.boolFullSearch = false;
    }

    ngOnInit() {
        console.log("dans on init");
        // get evenements du service this.getEvenements()
        this.getEvenements();
     }

    getEvenements(){
        // appelle methode service, subscribe
        this._evenementService.getEvenements().subscribe(
            data => {
                this.evenements = data;
                //print données :
                for(let i=0; i < this.evenements.length; i++){
                    console.log('evenement du service : ');
                    console.log(this.evenements[i]);
                }
            },
            error => this._erreurService.handleErreur(error)
        );
    }

    evenementSelect(evenement: Evenement){
        this.confirmImp = false;
        this.evenementSelected = evenement;
        console.log(this.evenementSelected);
        console.log('no evenement : ');
        console.log(this.evenementSelected.noEvenement);
        this.noEvenement = this.evenementSelected.noEvenement;
    }

    onSearchNoContrat(){

    }

    logInput(value){
        console.log(value);
    }

    eventModal(){
        this.titreModal = "Suppression";
    }

    onSpecialSearch(){

    }

    actualiser(){

    }

    onDelete(){

    }
}



