import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-nouvelles',
    template: `
        <h4>Une nouvelle</h4>
    `,
    styles: [`
       
    `
    ]
})
export class NouvellesComponent implements OnInit {
    //setter un boolean dans home lorsque le boton est clique et par un input passer le boolean ici pour quON affiche les nouvelles Ngif quelques
    //a  peser sur el bouton
    constructor() { }

    ngOnInit() { }
}