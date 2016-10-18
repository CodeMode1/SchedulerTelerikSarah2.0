import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';
import { ErrorService } from '../errors/error.service';

@Component({
    moduleId: module.id,
    selector: 'my-client',
    templateUrl: 'client.component.html',
    styles: [`
        tr{
            width:100%;
        }
        td{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width:200px;
        }
        
    `]
})
export class ClientComponent implements OnInit {
    @Input() client: Client;
    @Input() clientIndex: number;

    constructor(private _clientService: ClientService, private _errorService: ErrorService) { }

    ngOnInit() { 
        /*
        if(this.clientIndex == 0){
            this.clientIndex = 1;
        }
        */
    }
}