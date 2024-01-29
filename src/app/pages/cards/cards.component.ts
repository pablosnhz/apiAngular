import { Component, Input } from '@angular/core';
import { Personaje } from '../../../interfaces/personajes.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

@Input() personaje!: Personaje;

}
