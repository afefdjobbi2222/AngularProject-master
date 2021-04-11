import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArbitreService {
  
  private baseUrl = 'http://localhost:8005/api/'; 

  constructor(private http: HttpClient) { }

    getArbitre(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/${id}`);
    }
  
    createArbitre(arbitre: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, arbitre); 
    } 

    updateArbitre(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${id}`, value); 
    } 

    deleteArbitre(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}`+`supprimerarbitre/${id}`, {responseType: 'text' }); 
    } 
     
    getArbitreList(): Observable<any> {
      return this.http.get(`${this.baseUrl}`+`arbitres`); 
    } 

  
}
