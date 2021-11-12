import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

  private readonly URL_BUSCA_CEP = `https://viacep.com.br/ws/:cep/json/`;

  constructor(private httpClient: HttpClient) { }

  buscarCep(cep: string): Observable<any> {
    const url = this.URL_BUSCA_CEP.replace(':cep', cep);
    return this.httpClient.get(url);
  }


}
