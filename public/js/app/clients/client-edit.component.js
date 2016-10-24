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
var client_service_1 = require('./client.service');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var client_1 = require('./client');
var erreur_service_1 = require('../erreurs/erreur.service');
var EditClientComponent = (function () {
    function EditClientComponent(_formBuilder, _clientService, _erreurService, _activatedRoute) {
        this._formBuilder = _formBuilder;
        this._clientService = _clientService;
        this._erreurService = _erreurService;
        this._activatedRoute = _activatedRoute;
        this.identification = "Identification";
        this.gestion = "Gestion";
        this.myClient = new client_1.Client();
        this.modeSoumission = true;
    }
    EditClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._activatedRoute.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.estNouveau = false;
                _this.codeClient = +params['id'];
                _this._clientService.getClient(_this.codeClient)
                    .subscribe(function (data) {
                    _this.myClient = data;
                    console.log("client a modif: ");
                    console.log(_this.myClient);
                }, function (error) { return _this._erreurService.handleErreur(error); });
            }
            else {
                _this.estNouveau = true;
            }
            console.log(_this.estNouveau);
            //init form
            _this.creerForm();
        });
        //this.testCP();
    };
    EditClientComponent.prototype.creerForm = function () {
        //creer
        var noClient = null;
        var prenom = '';
        var nom = '';
        var noCompte = '';
        var courriel = '';
        var cell = '';
        var compagnie = '';
        var adresse = '';
        var ville = '';
        var codePostal = '';
        var telPrincipal = '';
        var province = '';
        var pays = '';
        var fax = '';
        var telSecondaire = '';
        var memo = '';
        var memoAVenir = '';
        var noExTaxeProv = '';
        var noExTaxeFed = '';
        var selectStatut = '';
        var selectSource = '';
        var modifPar = '';
        var modif = null;
        var dateDernEv = null;
        var creePar = '';
        var cree = null;
        if (!this.estNouveau) {
            //setter la valeur du client au form control
            this.myClient.noClient = noClient;
            this.myClient.prenom = prenom;
            this.myClient.nom = nom;
            this.myClient.noCompte = noCompte;
            this.myClient.courriel = courriel;
            this.myClient.cell = cell;
            this.myClient.compagnie = compagnie;
            this.myClient.adresse = adresse;
            this.myClient.ville = ville;
            this.myClient.codePostal = codePostal;
            this.myClient.telPrincipal = telPrincipal;
            this.myClient.province = province;
            this.myClient.pays = pays;
            this.myClient.fax = fax;
            this.myClient.telSecondaire = telSecondaire;
            this.myClient.memo = memo;
            this.myClient.memoAVenir = memoAVenir;
            this.myClient.noExTaxeProv = noExTaxeProv;
            this.myClient.noExTaxeFed = noExTaxeFed;
            this.myClient.selectStatut = selectStatut;
            this.myClient.selectSource = selectSource;
            this.myClient.modifPar = modifPar;
            this.myClient.modif = modif;
            this.myClient.dateDernEv = dateDernEv;
            this.myClient.creerPar = creePar;
            this.myClient.dateCree = cree;
        }
        //cree le form avec des blancs ou les valeurs du client cherché.
        this.editClientForm = this._formBuilder.group({
            noClient: [noClient],
            prenom: [prenom],
            nom: [nom, forms_1.Validators.required],
            noCompte: [noCompte],
            courriel: [courriel, this.estCourrielOK],
            cell: [cell],
            compagnie: [compagnie],
            adresse: [adresse],
            ville: [ville],
            codePostal: [codePostal, this.estCodePostalOK],
            telPrincipal: [telPrincipal, this.estTelephoneOK],
            province: [province],
            pays: [pays],
            fax: [fax],
            telSecondaire: [telSecondaire],
            memo: [memo],
            memoAVenir: [memoAVenir],
            noExTaxeProv: [noExTaxeProv],
            noExTaxeFed: [noExTaxeFed],
            selectStatut: [selectStatut],
            selectSource: [selectSource],
            modifPar: [modifPar],
            modif: [modif],
            dateDernEv: [dateDernEv],
            creePar: [creePar],
            cree: [cree]
        });
    };
    EditClientComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    EditClientComponent.prototype.formatCP = function (input) {
        //j'enleve les espaces, globalement.
        var chaine = input.value.replace(/\s+/g, "");
        //pour ajouter l'espace au 3eme carac.
        if (chaine.length > 3) {
            //je place l'espace à la bonne place.
            chaine = chaine.substr(0, 3) + " " + chaine.substr(3, 3);
        }
        //transformer le code Postal en majuscule.
        input.value = chaine.toUpperCase();
    };
    EditClientComponent.prototype.formatTP = function (input) {
        // j'enleve tout ce qui n'est pas chiffre, globalement.
        var chaine = input.value.replace(/[^0-9]/g, "");
        console.log(chaine);
        //au 11eme carac tapé, je reconstruis le tel avec ses bons chiffres.
        if (chaine.length > 10) {
            chaine = chaine.substr(1, 3) + chaine.substr(5, 3) + chaine.substr(9, 4);
        }
        //au 10eme carac, je formatte selon (XXX)XXX-XXXX.
        if (chaine.length === 10) {
            chaine = "(" + chaine.substr(0, 3) + ")" + chaine.substr(3, 3) + "-" + chaine.substr(6, 4);
        }
        /* si ces if sont inversés, chaine non-formattée.
           car au 10eme carac :
           chaine.length > 10 et donc la chaine revient non-formattée.
        */
        input.value = chaine;
    };
    EditClientComponent.prototype.estCodePostalOK = function (control) {
        //validation a réussi: pas de valeur tapée
        if (!control.value) {
            return null;
        }
        /*format regex canadien :
            ^ : chaine commence, $ : fin séquence
            lettre : pas de D, F, I, O, Q U
            1er lettre: pas de W, Z, chiffre: \d, lettre, blanc, chiffre, lettre, chiffre
        */
        var regexCP = /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ][ ]\d[ABCEGHJKLMNPRSTVWXYZ]\d$/;
        if (!control.value.match(regexCP)) {
            return { codePostalInvalide: true };
        }
        //validation résussie
        return null;
    };
    EditClientComponent.prototype.estTelephoneOK = function (control) {
        if (!control.value) {
            return null;
        }
        /* format regex canadien:
           ^ : sequence commence, $ : fin sequence
           ( , chiffre(x3), ) , chiffre (x3), - , chiffre (x4)
        */
        var regexTP = /^\u0028\d{3}\u0029\d{3}\u002D\d{4}$/;
        if (!control.value.match(regexTP)) {
            return { telephoneInvalide: true };
        }
        //validation réussie
        return null;
    };
    //validation: retourne null si valide et un boolean si erreur.
    EditClientComponent.prototype.estCourrielOK = function (control) {
        if (control.value) {
            var regexCourriel = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            if (!control.value.match(regexCourriel))
                return { courrielInvalide: true };
        }
        //validation réussie
        return null;
    };
    EditClientComponent.prototype.onSubmit = function () {
        var _this = this;
        //change mode modification, enable bouton Acutaliser et Copier.
        this.modeSoumission = false;
        this.formActualiser = true;
        this.formCopie = true;
        console.log("cree client : ");
        console.log(this.editClientForm.value);
        //IF NOUVEAU, APPEL CRÉÉ, SINON APPEL UPDATE
        if (this.estNouveau) {
            this._clientService.creerClient(this.myClient)
                .subscribe(function (data) {
                console.log('data du serveur :');
                console.log(data);
                _this.myClient = data;
                //sauver le _id qui revient dans le client créé par Mongo.
                _this.clientId = data.clientId;
                console.log("id de " + data.nom + " : " + _this.clientId);
                console.log("no de client : " + data.noClient);
                //sauver le no de client (no de la sequence)
                _this.myClient.noClient = data.noClient;
                //voir le message de sauvegarde succès
                _this.sauvegardeClient = true;
            }, function (error) { return _this._erreurService.handleErreur(error); });
        }
        else {
            this._clientService.updateClient(this.myClient)
                .subscribe(function (data) { return console.log(data); }, function (error) { return _this._erreurService.handleErreur(error); });
        }
    };
    EditClientComponent.prototype.testCP = function () {
        //retoune null (valide)
        //console.log(this.estCodePostalOK('H2S 0B5')); //ok
        //console.log(this.estCodePostalOK('h2s 0b5')); //ok
        //console.log(this.estCodePostalOK('h2s0b5'));  //ok
        //retourne true (fail)
        //console.log(this.estCodePostalOK('Z3V H2S')); //Ok
        //console.log(this.estCodePostalOK('z3vh2s'));  //ok
        //console.log(this.estCodePostalOK('B3V H2'));  //ok
    };
    EditClientComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-edit-client',
            templateUrl: 'client-edit.component.html',
            styles: ["\n        .outer{\n            float:left;\n            clear:both;\n            padding: 0 0 1% 0;\n        }\n        \n        .form-group{\n            float:left;\n        }\n\n        .divFooter{\n            text-align:center;\n        }\n\n        .footer{\n            border-top: 2px solid black;\n        }\n\n        button{  \n            display:block;\n            margin: 0 auto;\n        }\n\n        .space {\n            padding: 2%;\n        }\n\n        h2{\n            padding-top:1%;\n            padding-bottom:2%;\n        }\n\n        .title{\n            text-align:left;\n        }\n\n        .memo{\n            float: left;\n            clear: both;\n            padding: 0 0 2% 0;\n        }\n\n        textarea{\n            resize: none;\n        }\n\n        .gestionInputs{\n            float: left;\n            clear: both;\n        }\n\n        .dropdown{\n            padding:0;\n        }\n        .alert-success{\n            text-align:center;\n        }\n    "
            ]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, client_service_1.ClientService, erreur_service_1.ErreurService, router_1.ActivatedRoute])
    ], EditClientComponent);
    return EditClientComponent;
}());
exports.EditClientComponent = EditClientComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMvY2xpZW50LWVkaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0QsZUFBZSxDQUFDLENBQUE7QUFDeEUsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFDakQsc0JBQWdFLGdCQUFnQixDQUFDLENBQUE7QUFDakYsdUJBQStCLGlCQUFpQixDQUFDLENBQUE7QUFFakQsdUJBQXVCLFVBQVUsQ0FBQyxDQUFBO0FBQ2xDLCtCQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBdUUxRDtJQWNJLDZCQUFvQixZQUF5QixFQUFVLGNBQTZCLEVBQVUsY0FBNkIsRUFDL0csZUFBK0I7UUFEdkIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQy9HLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUN2QyxJQUFJLENBQUMsY0FBYyxHQUFHLGdCQUFnQixDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUYsc0NBQVEsR0FBUjtRQUFBLGlCQXdCQztRQXZCRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FDckQsVUFBQyxNQUFXO1lBQ1IsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixLQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQyxLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FB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QixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBQyw0QkFBNEI7WUFDeEMsTUFBTSxFQUFFLENBQUMsNitCQTBEUjthQUNBO1NBQ0osQ0FBQzs7MkJBQUE7SUFrUkYsMEJBQUM7QUFBRCxDQWpSQSxBQWlSQyxJQUFBO0FBalJZLDJCQUFtQixzQkFpUi9CLENBQUEiLCJmaWxlIjoiY2xpZW50cy9jbGllbnQtZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2xpZW50U2VydmljZSB9IGZyb20gJy4vY2xpZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1JYJztcclxuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnLi9jbGllbnQnO1xyXG5pbXBvcnQgeyBFcnJldXJTZXJ2aWNlIH0gZnJvbSAnLi4vZXJyZXVycy9lcnJldXIuc2VydmljZSc7XHJcblxyXG5pbnRlcmZhY2UgUmVzdWx0YXRWYWxpZGF0aW9uIHtcclxuICAgIFtjbGU6IHN0cmluZ106IGJvb2xlYW47XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbXktZWRpdC1jbGllbnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6J2NsaWVudC1lZGl0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAub3V0ZXJ7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIGNsZWFyOmJvdGg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAxJSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZm9ybS1ncm91cHtcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kaXZGb290ZXJ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvb3RlcntcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9ueyAgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNwYWNlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMiU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6MSU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjIlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVtb3tcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMiUgMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRleHRhcmVhe1xyXG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ2VzdGlvbklucHV0c3tcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRyb3Bkb3due1xyXG4gICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hbGVydC1zdWNjZXNze1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0Q2xpZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgaWRlbnRpZmljYXRpb246IHN0cmluZztcclxuICAgIGdlc3Rpb246IHN0cmluZztcclxuICAgIGVkaXRDbGllbnRGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBmb3JtQ29waWU6IGJvb2xlYW47XHJcbiAgICBmb3JtQWN0dWFsaXNlcjogYm9vbGVhbjtcclxuICAgIG1vZGVTb3VtaXNzaW9uOiBib29sZWFuO1xyXG4gICAgc2F1dmVnYXJkZUNsaWVudDogYm9vbGVhbjtcclxuICAgIG15Q2xpZW50IDogQ2xpZW50O1xyXG4gICAgY2xpZW50SWQ6IHN0cmluZztcclxuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gICAgZXN0Tm91dmVhdTogYm9vbGVhbjtcclxuICAgIGNvZGVDbGllbnQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgX2NsaWVudFNlcnZpY2U6IENsaWVudFNlcnZpY2UsIHByaXZhdGUgX2VycmV1clNlcnZpY2U6IEVycmV1clNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5pZGVudGlmaWNhdGlvbiA9IFwiSWRlbnRpZmljYXRpb25cIjtcclxuICAgICAgICB0aGlzLmdlc3Rpb24gPSBcIkdlc3Rpb25cIjtcclxuICAgICAgICB0aGlzLm15Q2xpZW50ID0gbmV3IENsaWVudCgpO1xyXG4gICAgICAgIHRoaXMubW9kZVNvdW1pc3Npb24gPSB0cnVlO1xyXG4gICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgXHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocGFyYW1zOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnaWQnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lc3ROb3V2ZWF1ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2RlQ2xpZW50ID0gK3BhcmFtc1snaWQnXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbGllbnRTZXJ2aWNlLmdldENsaWVudCh0aGlzLmNvZGVDbGllbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Q2xpZW50ID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWVudCBhIG1vZGlmOiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5teUNsaWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyZXVyU2VydmljZS5oYW5kbGVFcnJldXIoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lc3ROb3V2ZWF1ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZXN0Tm91dmVhdSk7XHJcbiAgICAgICAgICAgICAgICAvL2luaXQgZm9ybVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVlckZvcm0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7ICAgICAgXHJcbiAgICAgICAgLy90aGlzLnRlc3RDUCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWVyRm9ybSgpe1xyXG4gICAgICAgIC8vY3JlZXJcclxuICAgICAgICBsZXQgbm9DbGllbnQgPSBudWxsO1xyXG4gICAgICAgIGxldCBwcmVub20gPSAnJztcclxuICAgICAgICBsZXQgbm9tID0gJyc7XHJcbiAgICAgICAgbGV0IG5vQ29tcHRlID0gJyc7XHJcbiAgICAgICAgbGV0IGNvdXJyaWVsID0gJyc7XHJcbiAgICAgICAgbGV0IGNlbGwgPSAnJztcclxuICAgICAgICBsZXQgY29tcGFnbmllID0gJyc7XHJcbiAgICAgICAgbGV0IGFkcmVzc2UgPSAnJztcclxuICAgICAgICBsZXQgdmlsbGUgPSAnJztcclxuICAgICAgICBsZXQgY29kZVBvc3RhbCA9ICcnO1xyXG4gICAgICAgIGxldCB0ZWxQcmluY2lwYWwgPSAnJztcclxuICAgICAgICBsZXQgcHJvdmluY2UgPSAnJztcclxuICAgICAgICBsZXQgcGF5cyA9ICcnO1xyXG4gICAgICAgIGxldCBmYXggPSAnJztcclxuICAgICAgICBsZXQgdGVsU2Vjb25kYWlyZSA9ICcnO1xyXG4gICAgICAgIGxldCBtZW1vID0gJyc7XHJcbiAgICAgICAgbGV0IG1lbW9BVmVuaXIgPSAnJztcclxuICAgICAgICBsZXQgbm9FeFRheGVQcm92ID0gJyc7XHJcbiAgICAgICAgbGV0IG5vRXhUYXhlRmVkID0gJyc7XHJcbiAgICAgICAgbGV0IHNlbGVjdFN0YXR1dCA9ICcnO1xyXG4gICAgICAgIGxldCBzZWxlY3RTb3VyY2UgPSAnJztcclxuICAgICAgICBsZXQgbW9kaWZQYXIgPSAnJztcclxuICAgICAgICBsZXQgbW9kaWYgPSBudWxsO1xyXG4gICAgICAgIGxldCBkYXRlRGVybkV2ID0gbnVsbDtcclxuICAgICAgICBsZXQgY3JlZVBhciA9ICcnO1xyXG4gICAgICAgIGxldCBjcmVlID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuZXN0Tm91dmVhdSl7XHJcbiAgICAgICAgICAgIC8vc2V0dGVyIGxhIHZhbGV1ciBkdSBjbGllbnQgYXUgZm9ybSBjb250cm9sXHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQubm9DbGllbnQgPSBub0NsaWVudDtcclxuICAgICAgICAgICAgdGhpcy5teUNsaWVudC5wcmVub20gPSBwcmVub207XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQubm9tID0gbm9tO1xyXG4gICAgICAgICAgICB0aGlzLm15Q2xpZW50Lm5vQ29tcHRlID0gbm9Db21wdGU7XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQuY291cnJpZWwgPSBjb3VycmllbDtcclxuICAgICAgICAgICAgdGhpcy5teUNsaWVudC5jZWxsID0gY2VsbDtcclxuICAgICAgICAgICAgdGhpcy5teUNsaWVudC5jb21wYWduaWUgPSBjb21wYWduaWU7XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQuYWRyZXNzZSA9IGFkcmVzc2U7XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQudmlsbGUgPSB2aWxsZTtcclxuICAgICAgICAgICAgdGhpcy5teUNsaWVudC5jb2RlUG9zdGFsID0gY29kZVBvc3RhbDtcclxuICAgICAgICAgICAgdGhpcy5teUNsaWVudC50ZWxQcmluY2lwYWwgPSB0ZWxQcmluY2lwYWw7XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQucHJvdmluY2UgPSBwcm92aW5jZTtcclxuICAgICAgICAgICAgdGhpcy5teUNsaWVudC5wYXlzID0gcGF5cztcclxuICAgICAgICAgICAgdGhpcy5teUNsaWVudC5mYXggPSBmYXg7XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQudGVsU2Vjb25kYWlyZSA9IHRlbFNlY29uZGFpcmU7XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQubWVtbyA9IG1lbW87XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQubWVtb0FWZW5pciA9IG1lbW9BVmVuaXI7XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQubm9FeFRheGVQcm92ID0gbm9FeFRheGVQcm92O1xyXG4gICAgICAgICAgICB0aGlzLm15Q2xpZW50Lm5vRXhUYXhlRmVkID0gbm9FeFRheGVGZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQuc2VsZWN0U3RhdHV0ID0gc2VsZWN0U3RhdHV0O1xyXG4gICAgICAgICAgICB0aGlzLm15Q2xpZW50LnNlbGVjdFNvdXJjZSA9IHNlbGVjdFNvdXJjZTtcclxuICAgICAgICAgICAgdGhpcy5teUNsaWVudC5tb2RpZlBhciA9IG1vZGlmUGFyO1xyXG4gICAgICAgICAgICB0aGlzLm15Q2xpZW50Lm1vZGlmID0gbW9kaWY7XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQuZGF0ZURlcm5FdiA9IGRhdGVEZXJuRXY7XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQuY3JlZXJQYXIgPSBjcmVlUGFyO1xyXG4gICAgICAgICAgICB0aGlzLm15Q2xpZW50LmRhdGVDcmVlID0gY3JlZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vY3JlZSBsZSBmb3JtIGF2ZWMgZGVzIGJsYW5jcyBvdSBsZXMgdmFsZXVycyBkdSBjbGllbnQgY2hlcmNow6kuXHJcbiAgICAgICAgIHRoaXMuZWRpdENsaWVudEZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgIG5vQ2xpZW50OiBbbm9DbGllbnRdLFxyXG4gICAgICAgICAgICBwcmVub206IFtwcmVub21dLFxyXG4gICAgICAgICAgICBub206IFtub20sIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBub0NvbXB0ZTogW25vQ29tcHRlXSxcclxuICAgICAgICAgICAgY291cnJpZWw6IFtjb3VycmllbCwgdGhpcy5lc3RDb3VycmllbE9LXSxcclxuICAgICAgICAgICAgY2VsbDogW2NlbGxdLFxyXG4gICAgICAgICAgICBjb21wYWduaWU6IFtjb21wYWduaWVdLFxyXG4gICAgICAgICAgICBhZHJlc3NlOiBbYWRyZXNzZV0sXHJcbiAgICAgICAgICAgIHZpbGxlOiBbdmlsbGVdLFxyXG4gICAgICAgICAgICBjb2RlUG9zdGFsOiBbY29kZVBvc3RhbCwgdGhpcy5lc3RDb2RlUG9zdGFsT0tdLFxyXG4gICAgICAgICAgICB0ZWxQcmluY2lwYWw6IFt0ZWxQcmluY2lwYWwsIHRoaXMuZXN0VGVsZXBob25lT0tdLFxyXG4gICAgICAgICAgICBwcm92aW5jZTogW3Byb3ZpbmNlXSxcclxuICAgICAgICAgICAgcGF5czogW3BheXNdLFxyXG4gICAgICAgICAgICBmYXg6IFtmYXhdLFxyXG4gICAgICAgICAgICB0ZWxTZWNvbmRhaXJlOiBbdGVsU2Vjb25kYWlyZV0sXHJcbiAgICAgICAgICAgIG1lbW86IFttZW1vXSxcclxuICAgICAgICAgICAgbWVtb0FWZW5pcjogW21lbW9BVmVuaXJdLFxyXG4gICAgICAgICAgICBub0V4VGF4ZVByb3Y6IFtub0V4VGF4ZVByb3ZdLFxyXG4gICAgICAgICAgICBub0V4VGF4ZUZlZDogW25vRXhUYXhlRmVkXSxcclxuICAgICAgICAgICAgc2VsZWN0U3RhdHV0OiBbc2VsZWN0U3RhdHV0XSxcclxuICAgICAgICAgICAgc2VsZWN0U291cmNlOiBbc2VsZWN0U291cmNlXSwgXHJcbiAgICAgICAgICAgIG1vZGlmUGFyOiBbbW9kaWZQYXJdLFxyXG4gICAgICAgICAgICBtb2RpZjogW21vZGlmXSxcclxuICAgICAgICAgICAgZGF0ZURlcm5FdjogW2RhdGVEZXJuRXZdLFxyXG4gICAgICAgICAgICBjcmVlUGFyOiBbY3JlZVBhcl0sXHJcbiAgICAgICAgICAgIGNyZWU6IFtjcmVlXSAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKXtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdENQKGlucHV0KXtcclxuICAgICAgICAvL2onZW5sZXZlIGxlcyBlc3BhY2VzLCBnbG9iYWxlbWVudC5cclxuICAgICAgICB2YXIgY2hhaW5lID0gaW5wdXQudmFsdWUucmVwbGFjZSgvXFxzKy9nLCBcIlwiKTtcclxuICAgICAgICAvL3BvdXIgYWpvdXRlciBsJ2VzcGFjZSBhdSAzZW1lIGNhcmFjLlxyXG4gICAgICAgIGlmKGNoYWluZS5sZW5ndGggPiAzKXtcclxuICAgICAgICAgICAgLy9qZSBwbGFjZSBsJ2VzcGFjZSDDoCBsYSBib25uZSBwbGFjZS5cclxuICAgICAgICAgICAgY2hhaW5lID0gY2hhaW5lLnN1YnN0cigwLDMpICsgXCIgXCIgKyBjaGFpbmUuc3Vic3RyKDMsMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vdHJhbnNmb3JtZXIgbGUgY29kZSBQb3N0YWwgZW4gbWFqdXNjdWxlLlxyXG4gICAgICAgIGlucHV0LnZhbHVlID0gY2hhaW5lLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0VFAoaW5wdXQpe1xyXG4gICAgICAgIC8vIGonZW5sZXZlIHRvdXQgY2UgcXVpIG4nZXN0IHBhcyBjaGlmZnJlLCBnbG9iYWxlbWVudC5cclxuICAgICAgICB2YXIgY2hhaW5lID0gaW5wdXQudmFsdWUucmVwbGFjZSgvW14wLTldL2csIFwiXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoYWluZSk7XHJcblxyXG4gICAgICAgIC8vYXUgMTFlbWUgY2FyYWMgdGFww6ksIGplIHJlY29uc3RydWlzIGxlIHRlbCBhdmVjIHNlcyBib25zIGNoaWZmcmVzLlxyXG4gICAgICAgIGlmKGNoYWluZS5sZW5ndGggPiAxMCl7XHJcbiAgICAgICAgICAgIGNoYWluZSA9IGNoYWluZS5zdWJzdHIoMSwzKSArIGNoYWluZS5zdWJzdHIoNSwzKSArIGNoYWluZS5zdWJzdHIoOSw0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vYXUgMTBlbWUgY2FyYWMsIGplIGZvcm1hdHRlIHNlbG9uIChYWFgpWFhYLVhYWFguXHJcbiAgICAgICAgaWYoY2hhaW5lLmxlbmd0aCA9PT0gMTApe1xyXG4gICAgICAgICAgICBjaGFpbmUgPSBcIihcIiArIGNoYWluZS5zdWJzdHIoMCwzKSArIFwiKVwiICsgY2hhaW5lLnN1YnN0cigzLDMpICsgXCItXCIgKyBjaGFpbmUuc3Vic3RyKDYsNCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIHNpIGNlcyBpZiBzb250IGludmVyc8OpcywgY2hhaW5lIG5vbi1mb3JtYXR0w6llLlxyXG4gICAgICAgICAgIGNhciBhdSAxMGVtZSBjYXJhYyA6IFxyXG4gICAgICAgICAgIGNoYWluZS5sZW5ndGggPiAxMCBldCBkb25jIGxhIGNoYWluZSByZXZpZW50IG5vbi1mb3JtYXR0w6llLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBjaGFpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlc3RDb2RlUG9zdGFsT0soY29udHJvbDogRm9ybUNvbnRyb2wpOiBSZXN1bHRhdFZhbGlkYXRpb257XHJcbiAgICAgICAgLy92YWxpZGF0aW9uIGEgcsOpdXNzaTogcGFzIGRlIHZhbGV1ciB0YXDDqWVcclxuICAgICAgICBpZighY29udHJvbC52YWx1ZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKmZvcm1hdCByZWdleCBjYW5hZGllbiA6XHJcbiAgICAgICAgICAgIF4gOiBjaGFpbmUgY29tbWVuY2UsICQgOiBmaW4gc8OpcXVlbmNlXHJcbiAgICAgICAgICAgIGxldHRyZSA6IHBhcyBkZSBELCBGLCBJLCBPLCBRIFVcclxuICAgICAgICAgICAgMWVyIGxldHRyZTogcGFzIGRlIFcsIFosIGNoaWZmcmU6IFxcZCwgbGV0dHJlLCBibGFuYywgY2hpZmZyZSwgbGV0dHJlLCBjaGlmZnJlXHJcbiAgICAgICAgKi9cclxuICAgICAgICB2YXIgcmVnZXhDUCA9ICAvXltBQkNFR0hKS0xNTlBSU1RWWFldXFxkW0FCQ0VHSEpLTE1OUFJTVFZXWFlaXVsgXVxcZFtBQkNFR0hKS0xNTlBSU1RWV1hZWl1cXGQkLztcclxuICAgICAgICBpZighY29udHJvbC52YWx1ZS5tYXRjaChyZWdleENQKSl7XHJcbiAgICAgICAgICAgIHJldHVybiB7Y29kZVBvc3RhbEludmFsaWRlOiB0cnVlfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdmFsaWRhdGlvbiByw6lzdXNzaWVcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVzdFRlbGVwaG9uZU9LKGNvbnRyb2w6IEZvcm1Db250cm9sKTogUmVzdWx0YXRWYWxpZGF0aW9ue1xyXG4gICAgICAgIGlmKCFjb250cm9sLnZhbHVlKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIGZvcm1hdCByZWdleCBjYW5hZGllbjpcclxuICAgICAgICAgICBeIDogc2VxdWVuY2UgY29tbWVuY2UsICQgOiBmaW4gc2VxdWVuY2VcclxuICAgICAgICAgICAoICwgY2hpZmZyZSh4MyksICkgLCBjaGlmZnJlICh4MyksIC0gLCBjaGlmZnJlICh4NClcclxuICAgICAgICAqLyBcclxuICAgICAgICB2YXIgcmVnZXhUUCA9IC9eXFx1MDAyOFxcZHszfVxcdTAwMjlcXGR7M31cXHUwMDJEXFxkezR9JC87XHJcbiAgICAgICAgaWYoIWNvbnRyb2wudmFsdWUubWF0Y2gocmVnZXhUUCkpe1xyXG4gICAgICAgICAgICByZXR1cm4ge3RlbGVwaG9uZUludmFsaWRlOiB0cnVlfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy92YWxpZGF0aW9uIHLDqXVzc2llXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vdmFsaWRhdGlvbjogcmV0b3VybmUgbnVsbCBzaSB2YWxpZGUgZXQgdW4gYm9vbGVhbiBzaSBlcnJldXIuXHJcbiAgICAgcHJpdmF0ZSBlc3RDb3VycmllbE9LKGNvbnRyb2w6IEZvcm1Db250cm9sKTogUmVzdWx0YXRWYWxpZGF0aW9ue1xyXG4gICAgICAgICBpZiAoY29udHJvbC52YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgcmVnZXhDb3VycmllbCA9IC9bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8vO1xyXG4gICAgICAgICAgICBpZighY29udHJvbC52YWx1ZS5tYXRjaChyZWdleENvdXJyaWVsKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Y291cnJpZWxJbnZhbGlkZTogdHJ1ZX07XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vdmFsaWRhdGlvbiByw6l1c3NpZVxyXG4gICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpe1xyXG4gICAgICAgIC8vY2hhbmdlIG1vZGUgbW9kaWZpY2F0aW9uLCBlbmFibGUgYm91dG9uIEFjdXRhbGlzZXIgZXQgQ29waWVyLlxyXG4gICAgICAgIHRoaXMubW9kZVNvdW1pc3Npb24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZvcm1BY3R1YWxpc2VyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZvcm1Db3BpZSA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVlIGNsaWVudCA6IFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVkaXRDbGllbnRGb3JtLnZhbHVlKTtcclxuICAgICAgICAvL0lGIE5PVVZFQVUsIEFQUEVMIENSw4nDiSwgU0lOT04gQVBQRUwgVVBEQVRFXHJcbiAgICAgICAgaWYodGhpcy5lc3ROb3V2ZWF1KXtcclxuICAgICAgICAgICAgdGhpcy5fY2xpZW50U2VydmljZS5jcmVlckNsaWVudCh0aGlzLm15Q2xpZW50KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhIGR1IHNlcnZldXIgOicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlDbGllbnQgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vc2F1dmVyIGxlIF9pZCBxdWkgcmV2aWVudCBkYW5zIGxlIGNsaWVudCBjcsOpw6kgcGFyIE1vbmdvLlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50SWQgPSBkYXRhLmNsaWVudElkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaWQgZGUgXCIrIGRhdGEubm9tICsgXCIgOiBcIiArIHRoaXMuY2xpZW50SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gZGUgY2xpZW50IDogXCIgKyBkYXRhLm5vQ2xpZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAvL3NhdXZlciBsZSBubyBkZSBjbGllbnQgKG5vIGRlIGxhIHNlcXVlbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlDbGllbnQubm9DbGllbnQgPSBkYXRhLm5vQ2xpZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdm9pciBsZSBtZXNzYWdlIGRlIHNhdXZlZ2FyZGUgc3VjY8Ooc1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F1dmVnYXJkZUNsaWVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJldXJTZXJ2aWNlLmhhbmRsZUVycmV1cihlcnJvcilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuX2NsaWVudFNlcnZpY2UudXBkYXRlQ2xpZW50KHRoaXMubXlDbGllbnQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyZXVyU2VydmljZS5oYW5kbGVFcnJldXIoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLm15Q2xpZW50ID0gbnVsbDtcclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0ZXN0Q1AoKXtcclxuICAgICAgICAvL3JldG91bmUgbnVsbCAodmFsaWRlKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZXN0Q29kZVBvc3RhbE9LKCdIMlMgMEI1JykpOyAvL29rXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5lc3RDb2RlUG9zdGFsT0soJ2gycyAwYjUnKSk7IC8vb2tcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVzdENvZGVQb3N0YWxPSygnaDJzMGI1JykpOyAgLy9va1xyXG5cclxuICAgICAgICAvL3JldG91cm5lIHRydWUgKGZhaWwpXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5lc3RDb2RlUG9zdGFsT0soJ1ozViBIMlMnKSk7IC8vT2tcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVzdENvZGVQb3N0YWxPSygnejN2aDJzJykpOyAgLy9va1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZXN0Q29kZVBvc3RhbE9LKCdCM1YgSDInKSk7ICAvL29rXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19
