import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    mostrar: boolean = true;

    frase: any = {
        mensaje: 'Un gran poder exige una gran responsabilidad',
        author: 'Ben Parker'
    };

    personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];
}