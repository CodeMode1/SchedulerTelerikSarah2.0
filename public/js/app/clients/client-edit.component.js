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
var client_1 = require('./client');
var erreur_service_1 = require('../erreurs/erreur.service');
var EditClientComponent = (function () {
    function EditClientComponent(_formBuilder, _clientService, _erreurService) {
        this._formBuilder = _formBuilder;
        this._clientService = _clientService;
        this._erreurService = _erreurService;
        this.identification = "Identification";
        this.gestion = "Gestion";
        this.myClient = new client_1.Client();
        this.formActualiser = false;
        this.formCopie = false;
        this.modeSoumission = true;
        this.sauvegardeClient = false;
    }
    EditClientComponent.prototype.ngOnInit = function () {
        this.editClientForm = this._formBuilder.group({
            noClient: [''],
            prenom: [''],
            nom: ['', forms_1.Validators.required],
            noCompte: [''],
            courriel: ['', this.estCourrielOK],
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
        console.log(this.editClientForm.value);
        console.log('creer Client: ' + this.myClient.prenom + " " + this.myClient.nom + " " + this.myClient.courriel);
        this._clientService.creerClient(this.myClient)
            .subscribe(function (data) {
            console.log('data du serveur :');
            console.log(data);
            _this.myClient = data;
            //sauver le _id qui revient dans le client créé par Mongo.
            _this.clientId = data.clientId;
            console.log("id de " + data.nom + " : " + _this.clientId);
            console.log("no de client : " + data.noClient);
            _this.myClient.noClient = data.noClient;
            _this.sauvegardeClient = true;
        }, function (error) { return _this._erreurService.handleErreur(error); });
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
        __metadata('design:paramtypes', [forms_1.FormBuilder, client_service_1.ClientService, erreur_service_1.ErreurService])
    ], EditClientComponent);
    return EditClientComponent;
}());
exports.EditClientComponent = EditClientComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMvY2xpZW50LWVkaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFDakQsc0JBQWdFLGdCQUFnQixDQUFDLENBQUE7QUFDakYsdUJBQXVCLFVBQVUsQ0FBQyxDQUFBO0FBQ2xDLCtCQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBdUUxRDtJQVdJLDZCQUFvQixZQUF5QixFQUFVLGNBQTZCLEVBQVUsY0FBNkI7UUFBdkcsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQ3ZILElBQUksQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUVGLHNDQUFRLEdBQVI7UUFDSyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzNDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNkLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNaLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUM5QixRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDZCxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUcsSUFBSSxDQUFDLGFBQWEs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RyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDckMsQ0FBQyxFQUNHLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQXZDLENBQXVDLENBQ25ELENBQUM7SUFFVixDQUFDO0lBRU8sb0NBQU0sR0FBZDtRQUNJLHVCQUF1QjtRQUNuQixvREFBb0Q7UUFDcEQsb0RBQW9EO1FBQ3BELG9EQUFvRDtRQUV4RCxzQkFBc0I7UUFDbEIsb0RBQW9EO1FBQ3BELG9EQUFvRDtRQUNwRCxvREFBb0Q7SUFDNUQsQ0FBQztJQTdPTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUMsNEJBQTRCO1lBQ3hDLE1BQU0sRUFBRSxDQUFDLDYrQkEwRFI7YUFDQTtTQUNKLENBQUM7OzJCQUFBO0lBOEtGLDBCQUFDO0FBQUQsQ0E3S0EsQUE2S0MsSUFBQTtBQTdLWSwyQkFBbUIsc0JBNksvQixDQUFBIiwiZmlsZSI6ImNsaWVudHMvY2xpZW50LWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDbGllbnRTZXJ2aWNlIH0gZnJvbSAnLi9jbGllbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuL2NsaWVudCc7XHJcbmltcG9ydCB7IEVycmV1clNlcnZpY2UgfSBmcm9tICcuLi9lcnJldXJzL2VycmV1ci5zZXJ2aWNlJztcclxuXHJcbmludGVyZmFjZSBSZXN1bHRhdFZhbGlkYXRpb24ge1xyXG4gICAgW2NsZTogc3RyaW5nXTogYm9vbGVhbjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdteS1lZGl0LWNsaWVudCcsXHJcbiAgICB0ZW1wbGF0ZVVybDonY2xpZW50LWVkaXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIC5vdXRlcntcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgY2xlYXI6Ym90aDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDElIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5mb3JtLWdyb3Vwe1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRpdkZvb3RlcntcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9vdGVye1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b257ICBcclxuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3BhY2Uge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDoxJTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206MiU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZW1ve1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAyJSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGV4dGFyZWF7XHJcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5nZXN0aW9uSW5wdXRze1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZHJvcGRvd257XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFsZXJ0LXN1Y2Nlc3N7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRDbGllbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgaWRlbnRpZmljYXRpb246IHN0cmluZztcclxuICAgIGdlc3Rpb246IHN0cmluZztcclxuICAgIGVkaXRDbGllbnRGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBmb3JtQ29waWU6IGJvb2xlYW47XHJcbiAgICBmb3JtQWN0dWFsaXNlcjogYm9vbGVhbjtcclxuICAgIG1vZGVTb3VtaXNzaW9uOiBib29sZWFuO1xyXG4gICAgc2F1dmVnYXJkZUNsaWVudDogYm9vbGVhbjtcclxuICAgIG15Q2xpZW50IDogQ2xpZW50O1xyXG4gICAgY2xpZW50SWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgX2NsaWVudFNlcnZpY2U6IENsaWVudFNlcnZpY2UsIHByaXZhdGUgX2VycmV1clNlcnZpY2U6IEVycmV1clNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmlkZW50aWZpY2F0aW9uID0gXCJJZGVudGlmaWNhdGlvblwiO1xyXG4gICAgICAgIHRoaXMuZ2VzdGlvbiA9IFwiR2VzdGlvblwiO1xyXG4gICAgICAgIHRoaXMubXlDbGllbnQgPSBuZXcgQ2xpZW50KCk7XHJcbiAgICAgICAgdGhpcy5mb3JtQWN0dWFsaXNlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZm9ybUNvcGllID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tb2RlU291bWlzc2lvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zYXV2ZWdhcmRlQ2xpZW50ID0gZmFsc2U7XHJcbiAgICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkgeyBcclxuICAgICAgICAgdGhpcy5lZGl0Q2xpZW50Rm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgbm9DbGllbnQ6IFsnJ10sXHJcbiAgICAgICAgICAgIHByZW5vbTogWycnXSxcclxuICAgICAgICAgICAgbm9tOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBub0NvbXB0ZTogWycnXSxcclxuICAgICAgICAgICAgY291cnJpZWw6IFsnJywgIHRoaXMuZXN0Q291cnJpZWxPS10sXHJcbiAgICAgICAgICAgIGNlbGw6IFsnJ10sXHJcbiAgICAgICAgICAgIGNvbXBhZ25pZTogWycnXSxcclxuICAgICAgICAgICAgYWRyZXNzZTogWycnXSxcclxuICAgICAgICAgICAgdmlsbGU6IFsnJ10sXHJcbiAgICAgICAgICAgIGNvZGVQb3N0YWw6IFsnJywgdGhpcy5lc3RDb2RlUG9zdGFsT0tdLFxyXG4gICAgICAgICAgICB0ZWxQcmluY2lwYWw6IFsnJywgdGhpcy5lc3RUZWxlcGhvbmVPS10sXHJcbiAgICAgICAgICAgIHByb3ZpbmNlOiBbJyddLFxyXG4gICAgICAgICAgICBwYXlzOiBbJyddLFxyXG4gICAgICAgICAgICBmYXg6IFsnJ10sXHJcbiAgICAgICAgICAgIHRlbFNlY29uZGFpcmU6IFsnJ10sXHJcbiAgICAgICAgICAgIG1lbW86IFsnJ10sXHJcbiAgICAgICAgICAgIG1lbW9BVmVuaXI6IFsnJ10sXHJcbiAgICAgICAgICAgIG5vRXhUYXhlUHJvdjogWycnXSxcclxuICAgICAgICAgICAgbm9FeFRheGVGZWQ6IFsnJ10sXHJcbiAgICAgICAgICAgIHNlbGVjdFN0YXR1dDogWycnXSxcclxuICAgICAgICAgICAgc2VsZWN0U291cmNlOiBbJyddLCBcclxuICAgICAgICAgICAgbW9kaWZQYXI6IFsnJ10sXHJcbiAgICAgICAgICAgIG1vZGlmOiBbJyddLFxyXG4gICAgICAgICAgICBkYXRlRGVybkV2OiBbJyddLFxyXG4gICAgICAgICAgICBjcmVlUGFyOiBbJyddLFxyXG4gICAgICAgICAgICBjcmVlOiBbJyddICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdGhpcy50ZXN0Q1AoKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXRDUChpbnB1dCl7XHJcbiAgICAgICAgLy9qJ2VubGV2ZSBsZXMgZXNwYWNlcywgZ2xvYmFsZW1lbnQuXHJcbiAgICAgICAgdmFyIGNoYWluZSA9IGlucHV0LnZhbHVlLnJlcGxhY2UoL1xccysvZywgXCJcIik7XHJcbiAgICAgICAgLy9wb3VyIGFqb3V0ZXIgbCdlc3BhY2UgYXUgM2VtZSBjYXJhYy5cclxuICAgICAgICBpZihjaGFpbmUubGVuZ3RoID4gMyl7XHJcbiAgICAgICAgICAgIC8vamUgcGxhY2UgbCdlc3BhY2Ugw6AgbGEgYm9ubmUgcGxhY2UuXHJcbiAgICAgICAgICAgIGNoYWluZSA9IGNoYWluZS5zdWJzdHIoMCwzKSArIFwiIFwiICsgY2hhaW5lLnN1YnN0cigzLDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3RyYW5zZm9ybWVyIGxlIGNvZGUgUG9zdGFsIGVuIG1hanVzY3VsZS5cclxuICAgICAgICBpbnB1dC52YWx1ZSA9IGNoYWluZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdFRQKGlucHV0KXtcclxuICAgICAgICAvLyBqJ2VubGV2ZSB0b3V0IGNlIHF1aSBuJ2VzdCBwYXMgY2hpZmZyZSwgZ2xvYmFsZW1lbnQuXHJcbiAgICAgICAgdmFyIGNoYWluZSA9IGlucHV0LnZhbHVlLnJlcGxhY2UoL1teMC05XS9nLCBcIlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGFpbmUpO1xyXG5cclxuICAgICAgICAvL2F1IDExZW1lIGNhcmFjIHRhcMOpLCBqZSByZWNvbnN0cnVpcyBsZSB0ZWwgYXZlYyBzZXMgYm9ucyBjaGlmZnJlcy5cclxuICAgICAgICBpZihjaGFpbmUubGVuZ3RoID4gMTApe1xyXG4gICAgICAgICAgICBjaGFpbmUgPSBjaGFpbmUuc3Vic3RyKDEsMykgKyBjaGFpbmUuc3Vic3RyKDUsMykgKyBjaGFpbmUuc3Vic3RyKDksNCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2F1IDEwZW1lIGNhcmFjLCBqZSBmb3JtYXR0ZSBzZWxvbiAoWFhYKVhYWC1YWFhYLlxyXG4gICAgICAgIGlmKGNoYWluZS5sZW5ndGggPT09IDEwKXtcclxuICAgICAgICAgICAgY2hhaW5lID0gXCIoXCIgKyBjaGFpbmUuc3Vic3RyKDAsMykgKyBcIilcIiArIGNoYWluZS5zdWJzdHIoMywzKSArIFwiLVwiICsgY2hhaW5lLnN1YnN0cig2LDQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKiBzaSBjZXMgaWYgc29udCBpbnZlcnPDqXMsIGNoYWluZSBub24tZm9ybWF0dMOpZS5cclxuICAgICAgICAgICBjYXIgYXUgMTBlbWUgY2FyYWMgOiBcclxuICAgICAgICAgICBjaGFpbmUubGVuZ3RoID4gMTAgZXQgZG9uYyBsYSBjaGFpbmUgcmV2aWVudCBub24tZm9ybWF0dMOpZS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gY2hhaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXN0Q29kZVBvc3RhbE9LKGNvbnRyb2w6IEZvcm1Db250cm9sKTogUmVzdWx0YXRWYWxpZGF0aW9ue1xyXG4gICAgICAgIC8vdmFsaWRhdGlvbiBhIHLDqXVzc2k6IHBhcyBkZSB2YWxldXIgdGFww6llXHJcbiAgICAgICAgaWYoIWNvbnRyb2wudmFsdWUpe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLypmb3JtYXQgcmVnZXggY2FuYWRpZW4gOlxyXG4gICAgICAgICAgICBeIDogY2hhaW5lIGNvbW1lbmNlLCAkIDogZmluIHPDqXF1ZW5jZVxyXG4gICAgICAgICAgICBsZXR0cmUgOiBwYXMgZGUgRCwgRiwgSSwgTywgUSBVXHJcbiAgICAgICAgICAgIDFlciBsZXR0cmU6IHBhcyBkZSBXLCBaLCBjaGlmZnJlOiBcXGQsIGxldHRyZSwgYmxhbmMsIGNoaWZmcmUsIGxldHRyZSwgY2hpZmZyZVxyXG4gICAgICAgICovXHJcbiAgICAgICAgdmFyIHJlZ2V4Q1AgPSAgL15bQUJDRUdISktMTU5QUlNUVlhZXVxcZFtBQkNFR0hKS0xNTlBSU1RWV1hZWl1bIF1cXGRbQUJDRUdISktMTU5QUlNUVldYWVpdXFxkJC87XHJcbiAgICAgICAgaWYoIWNvbnRyb2wudmFsdWUubWF0Y2gocmVnZXhDUCkpe1xyXG4gICAgICAgICAgICByZXR1cm4ge2NvZGVQb3N0YWxJbnZhbGlkZTogdHJ1ZX07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3ZhbGlkYXRpb24gcsOpc3Vzc2llXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlc3RUZWxlcGhvbmVPSyhjb250cm9sOiBGb3JtQ29udHJvbCk6IFJlc3VsdGF0VmFsaWRhdGlvbntcclxuICAgICAgICBpZighY29udHJvbC52YWx1ZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBmb3JtYXQgcmVnZXggY2FuYWRpZW46XHJcbiAgICAgICAgICAgXiA6IHNlcXVlbmNlIGNvbW1lbmNlLCAkIDogZmluIHNlcXVlbmNlXHJcbiAgICAgICAgICAgKCAsIGNoaWZmcmUoeDMpLCApICwgY2hpZmZyZSAoeDMpLCAtICwgY2hpZmZyZSAoeDQpXHJcbiAgICAgICAgKi8gXHJcbiAgICAgICAgdmFyIHJlZ2V4VFAgPSAvXlxcdTAwMjhcXGR7M31cXHUwMDI5XFxkezN9XFx1MDAyRFxcZHs0fSQvO1xyXG4gICAgICAgIGlmKCFjb250cm9sLnZhbHVlLm1hdGNoKHJlZ2V4VFApKXtcclxuICAgICAgICAgICAgcmV0dXJuIHt0ZWxlcGhvbmVJbnZhbGlkZTogdHJ1ZX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdmFsaWRhdGlvbiByw6l1c3NpZVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL3ZhbGlkYXRpb246IHJldG91cm5lIG51bGwgc2kgdmFsaWRlIGV0IHVuIGJvb2xlYW4gc2kgZXJyZXVyLlxyXG4gICAgIHByaXZhdGUgZXN0Q291cnJpZWxPSyhjb250cm9sOiBGb3JtQ29udHJvbCk6IFJlc3VsdGF0VmFsaWRhdGlvbntcclxuICAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyIHJlZ2V4Q291cnJpZWwgPSAvW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/LztcclxuICAgICAgICAgICAgaWYoIWNvbnRyb2wudmFsdWUubWF0Y2gocmVnZXhDb3VycmllbCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge2NvdXJyaWVsSW52YWxpZGU6IHRydWV9O1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvL3ZhbGlkYXRpb24gcsOpdXNzaWVcclxuICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKXtcclxuICAgICAgICAvL2NoYW5nZSBtb2RlIG1vZGlmaWNhdGlvbiwgZW5hYmxlIGJvdXRvbiBBY3V0YWxpc2VyIGV0IENvcGllci5cclxuICAgICAgICB0aGlzLm1vZGVTb3VtaXNzaW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5mb3JtQWN0dWFsaXNlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29waWUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWRpdENsaWVudEZvcm0udmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjcmVlciBDbGllbnQ6ICcgKyB0aGlzLm15Q2xpZW50LnByZW5vbSArIFwiIFwiICsgdGhpcy5teUNsaWVudC5ub20gKyBcIiBcIiArIHRoaXMubXlDbGllbnQuY291cnJpZWwpO1xyXG4gICAgICAgIHRoaXMuX2NsaWVudFNlcnZpY2UuY3JlZXJDbGllbnQodGhpcy5teUNsaWVudClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YSBkdSBzZXJ2ZXVyIDonKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Q2xpZW50ID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAvL3NhdXZlciBsZSBfaWQgcXVpIHJldmllbnQgZGFucyBsZSBjbGllbnQgY3LDqcOpIHBhciBNb25nby5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudElkID0gZGF0YS5jbGllbnRJZDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImlkIGRlIFwiKyBkYXRhLm5vbSArIFwiIDogXCIgKyB0aGlzLmNsaWVudElkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGRlIGNsaWVudCA6IFwiICsgZGF0YS5ub0NsaWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teUNsaWVudC5ub0NsaWVudCA9IGRhdGEubm9DbGllbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXV2ZWdhcmRlQ2xpZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2VycmV1clNlcnZpY2UuaGFuZGxlRXJyZXVyKGVycm9yKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0ZXN0Q1AoKXtcclxuICAgICAgICAvL3JldG91bmUgbnVsbCAodmFsaWRlKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZXN0Q29kZVBvc3RhbE9LKCdIMlMgMEI1JykpOyAvL29rXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5lc3RDb2RlUG9zdGFsT0soJ2gycyAwYjUnKSk7IC8vb2tcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVzdENvZGVQb3N0YWxPSygnaDJzMGI1JykpOyAgLy9va1xyXG5cclxuICAgICAgICAvL3JldG91cm5lIHRydWUgKGZhaWwpXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5lc3RDb2RlUG9zdGFsT0soJ1ozViBIMlMnKSk7IC8vT2tcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVzdENvZGVQb3N0YWxPSygnejN2aDJzJykpOyAgLy9va1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZXN0Q29kZVBvc3RhbE9LKCdCM1YgSDInKSk7ICAvL29rXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19
