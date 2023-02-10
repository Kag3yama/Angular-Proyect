import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { EditarCursoDialogComponent } from '../editar-curso-dialog/editar-curso-dialog.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  filtro: string = '';
  cursos: Curso[] = [
    {
      nombre: 'Matias Cortes', 
      email: 'matiascortes@gmail.com',
      years: 29
    },
    {
      nombre: 'Romina Montenegro', 
      email: 'rominamontenegro@gmail.com',
      years: 26,
    },
    {
      nombre: 'Agustina Garcia Da Rosa', 
      email: 'agustinagarcia@gmail.com',
      years: 19
    },
    {
      nombre: 'Matias Olivieri', 
      email: 'matiasolivieri@gmail.com',
      years: 23
    }
  ];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);
  columnas: string[] = ['nombre', 'email', 'years', 'acciones'];
}