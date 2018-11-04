import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '01-hola-mundo';
  nombre: string = 'Jesús';
  apellido: string = 'Sánchez';
}
