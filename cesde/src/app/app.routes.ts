import { Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';

export const routes: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: '', redirectTo: 'cursos', pathMatch: 'full' }
];
