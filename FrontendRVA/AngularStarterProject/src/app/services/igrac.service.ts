import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGRACI_TIMA_URL, IGRAC_URL } from '../app.constants';
import { Igrac } from '../models/igrac';

@Injectable({
  providedIn: 'root'
})
export class IgracService {

  constructor(private httpClient: HttpClient) { }

  public getIgracaTima(idTima: number): Observable<any> {
    return this.httpClient.get(`${IGRACI_TIMA_URL}/${idTima}`);
  }

  public addIgrac(igrac: Igrac): Observable<any> {
    igrac.id = 0;
    return this.httpClient.post(`${IGRAC_URL}`, igrac);
  }

  public updateIgrac(igrac: Igrac): Observable<any> {
    return this.httpClient.put(`${IGRAC_URL}`, igrac);
  }

  public deleteIgrac(id: number): Observable<any> {
    return this.httpClient.delete(`${IGRAC_URL}/${id}`);
  }
}
