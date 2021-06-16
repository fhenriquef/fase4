import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Cliente
{
  id: string;
  nome: string;
  qualificacao: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  telefone: string;
  localizacao: string;
}
@Injectable({
  providedIn: 'root'
})
export class clienteService {
private url = 'http://localhost:3000/mecanicos';

  constructor(private http: HttpClient) { }
  getAll()
  {
    return this.http.get<[Cliente]>(this.url);
  }

  remove(id: any){
    return this.http.delete(this.url + '/' +id);
  }

  create(cliente: Cliente)
  {
      return this.http.post(this.url, cliente);
  }

  update(cliente: Cliente, id: any)
  {
    return this.http.put(this.url + '/' + id, cliente);
  }
}
