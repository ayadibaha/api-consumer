import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salarie } from './models/salarie';
import { Request } from './models/request';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiConsumerService {
  // The root path to the API
  private apiUrl = 'http://localhost:8080/Employee';
  constructor(private http: HttpClient) { }
  // Retourner une liste des salariés même avec doublons
  getSalaries(): Observable<Salarie[]> {
    return this.http.get<Salarie[]>(this.apiUrl + '/list');
  }
  // Retourner un salarié
  getSalarie(id): Observable<Salarie> {
    return this.http.get<Salarie>(this.apiUrl + '/' + id);
  }
  // Ajouter un salarié
  addSalarie(salarie: Salarie): Observable<Salarie> {
    return this.http.post<Salarie>(this.apiUrl + '/add', salarie, httpOptions);
  }
  // Mettre à jour un salarié
  updateSalarie(salarie: Salarie): Observable<Salarie> {
    return this.http.put<Salarie>(this.apiUrl + '/update', salarie, httpOptions);
  }
  // Supprimer un salariés
  deleteSalarie(salarie: Salarie): Observable<Salarie> {
    const id = salarie._id;
    return this.http.delete<Salarie>(this.apiUrl + '/delete/' + id, httpOptions);
  }
  // Retourne la liste passé en paramètre sans doublons
  updateListSalaries(request: Request): Observable<Object> {
    return this.http.post(this.apiUrl + '/filter', request, httpOptions);
  }
}
