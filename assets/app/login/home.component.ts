import { Component, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'my-home',
    template: `
        <div class="jumbotron col-md-12">
            <h2>{{title}}</h2>
            <p><a class="btn btn-primary btn-lg" role="button">Nouvelles</a></p>
        </div>
        <section class="row col-md-12">
            <div class="container col-md-4">
                <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
            </div>
            <div class="container col-md-4">
                <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
            </div>
            <div class="container col-md-4">
                <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
            </div>
        </section>
        <article id="nouvelles" class="jumbotron col-md-12">
            <h3>{{nouvelles}}</h3>
            <my-nouvelles></my-nouvelles>
        </article>
    `,
    styles: [`
        *{
            margin:0;
        }

        h2, h3{
            padding: 2% 0 2% 0;
        }

        .jumbotron{
            clear:both;
            float:left;
            width:100%;
        }

        .container{
            margin:0;
            text-align:center;
            padding:2% 0 2% 0;
            background-color: #A2B5CD;
            width:100%;
        }

        .glyphicon{
            font-size:2vw;
        }

        .row{
            padding:0;
        }
    `]
})
export class HomeComponent implements OnInit {
    //background-color:#4c4c4c;
    title: string;
    nouvelles: string;
    constructor() { 
        this.title = "Système Abordable de Réservation et Agenda";
        this.nouvelles = "Nouvelles";
    }

    ngOnInit() { }
}