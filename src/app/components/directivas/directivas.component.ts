import { Component } from '@angular/core';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  subtitulo: string = "Este es un ejemplo de interpolacion mediante {{ }}"
  variable1: number = 5;
  estudianteActual: Estudiante = {
    nombre: 'Matias',
    edad: 22,
    estaActivo: false
  };

  listaEstudiantes: Estudiante[] = [
    {
      nombre: 'Matias',
      edad: 22,
      estaActivo: false
    },
    {
      nombre: 'Romina',
      edad: 24,
      estaActivo: true
    },
    {
      nombre: 'Agustina',
      edad: 12,
      estaActivo: true
    }
  ]
}