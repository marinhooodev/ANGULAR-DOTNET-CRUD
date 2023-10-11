import { Injectable } from '@angular/core';
import { Funcionarios } from '../models/funcionarios';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class FuncionariosService {
  private url = 'Funcionarios';

  constructor(private http: HttpClient) {}

  public getFuncionarios(): Observable<Funcionarios[]> {
    return this.http.get<Funcionarios[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateFuncionario(funcionario: Funcionarios): Observable<Funcionarios[]> {
    return this.http.put<Funcionarios[]>(`${environment.apiUrl}/${this.url}`, funcionario);
  }
  public createFuncionario(funcionario: Funcionarios): Observable<Funcionarios[]> {
    return this.http.post<Funcionarios[]>(`${environment.apiUrl}/${this.url}`, funcionario);
  }
  public deleteFuncionario(funcionario: Funcionarios): Observable<Funcionarios[]> {
    return this.http.delete<Funcionarios[]>(`${environment.apiUrl}/${this.url}/${funcionario.id}`);
  }
}
