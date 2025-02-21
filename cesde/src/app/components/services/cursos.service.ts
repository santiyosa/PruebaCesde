import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private apiUrl = 'http://localhost:3000/cursos';


  constructor(private http: HttpClient) {}

  getCursos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  agregarCurso(curso: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cursos`, curso);
  }

  actualizarCurso(id: number, curso: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/cursos/${id}`, curso);
  }

  eliminarCurso(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/cursos/${id}`);
  }
}
