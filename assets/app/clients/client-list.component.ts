import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';
import { ErreurService } from '../erreurs/erreur.service';
import { CapitalizePipe } from '../pipes/capitalize.pipe';

@Component({
    moduleId: module.id,
    selector: 'my-client-list',
    templateUrl: 'client-list.component.html',
    styles: [`
        section{
            padding: 2% 0 0 0;
        }

        td, th{
            text-align:left;
            font-size: 1vw;
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
        }

        .size{
            font-size:1vw;
            text-align:center;
        }

        a{
            color: #000;
            display: block;
            clear: both;
        }

        a:hover{
            color: #337ab7;
        }

        .widgets{
            display: inline-block;
            padding-right: 5%;
        }

        #specialSearch{
            padding: 0;
        }

        .divFooter{
            text-align:center;
        }

        .col-md-12 {
            padding: 2%;
        }

    `]
})
export class ClientListComponent implements OnInit {
    titre: string = "Liste des Clients";
    clients: Client[];
    clientSelected: Client;
    clientId: number;
    
    constructor(private _clientService: ClientService, private _erreurService: ErreurService) { }

    ngOnInit() {
        console.log('dans on init');
        this._clientService.getClients().subscribe(
            data => {
                this.clients = data;
                //print data
                for(let i=0; i < this.clients.length; i++){
                    console.log(this.clients[i]);
                }
            },
            error => this._erreurService.handleErreur(error)
        );
    }

    clientSelect(client: Client){
        this.clientSelected = client;
        console.log(this.clientSelected);
        console.log(this.clientSelected.noClient);
        this.clientId = this.clientSelected.noClient;
        //console.log("id mongo : " + this.clientSelected.clientId);
    }
}