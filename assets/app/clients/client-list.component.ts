import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';
import { ErrorService } from '../errors/error.service';
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
            text-decoration: none;
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
    
    constructor(private _clientService: ClientService, private _errorService: ErrorService) { }

    ngOnInit() {
        console.log('dans on init');
        this._clientService.getClients().subscribe(
            data => this.clients = data,
            error => this._errorService.handleError(error)
        ); 
    }
}