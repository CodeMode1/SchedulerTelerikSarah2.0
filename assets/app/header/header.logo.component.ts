import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-logo',
    template: `
    <div>
        <img [src]="path" alt="{{alt}}">
    </div>
    `,
    styles: [`
        img {
            max-width:100%;
            height:auto;
            display:inline-block;
            padding:20%;
        }

        div{
            display:block;
            float:left;
            background-color: #e7edf5;
            width:15%;
            text-align:center;
        }
    `
    ]
})
export class LogoComponent implements OnInit {
    alt: string = "Sarah logo";
    path: string = "./img/sarah-logo.png";
    constructor() { }

    ngOnInit() { }
}