import { Component, OnInit } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cursos',
  imports: [NgFor, FormsModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {
  cursos: any[] = [];

  constructor(private cursosService: CursosService, private router: Router) {}

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos(): void {
    this.cursosService.getCursos().subscribe((data) => {
      this.cursos = data;
    });
  }

  editarCurso(curso: any): void {

  }

  agregarCurso(): void {

  }

  eliminarCurso(id: number): void {
    this.cursosService.eliminarCurso(id).subscribe(() => {
      this.cargarCursos();
    });
  }

}
