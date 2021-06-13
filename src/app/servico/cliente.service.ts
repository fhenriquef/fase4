import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Cliente
{
  id: string;
  codigo: string;
  descricao: string;
  tipo: string;
  preco: string;
  quantidade: string;
  email: string;
  senha: string;
  nome: string;
  nome_gerente: string;
  cnpj: string;
  telefone: string;
  endereco: string;
  localizacao: string; 
}
@Injectable({
  providedIn: 'root'
})
export class clienteService {
private url = 'http://localhost:3000/pecas';

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
