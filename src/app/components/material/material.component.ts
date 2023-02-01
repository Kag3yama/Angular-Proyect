import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from '../../models/curso';
import { MatDialog } from '@angular/material/dialog';
import { EditarCursoDialogComponent } from '../editar-curso-dialog/editar-curso-dialog.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  cursos: Curso [] = [
    {nombre: 'Angular', comision: '49533', profesor: 'Matias'},
    {nombre: 'Vue', comision: '42523', profesor: 'Lucas'},
    {nombre: 'NodeJS', comision: '42524', profesor: 'Agustina'},
    {nombre: 'React', comision: '42525', profesor: 'Romina'},
  ];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos)
  columnas: string [] = ['nombre', 'comision', 'profesor', 'acciones']

  constructor(
    private dialog: MatDialog
  ){

  }

  abrirModal(curso: Curso){
    const dialogRef = this.dialog.open(EditarCursoDialogComponent, {
      data: curso
    });
  }
}