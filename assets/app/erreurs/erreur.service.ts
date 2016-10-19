import { EventEmitter } from '@angular/core';
import { Erreur } from './erreur';

export class ErreurService{
    erreurArrivee = new EventEmitter<Erreur>();

    handleErreur(erreur: any){
        const erreurData = new Erreur(erreur.title, erreur.erreur.message);
        this.erreurArrivee.emit(erreurData);
    }
}