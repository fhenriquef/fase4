import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { clienteService, Cliente } from 'src/app/servico/cliente.service';

@Component({
  selector: 'app-modalcliente',
  templateUrl: './modalcliente.page.html',
  styleUrls: ['./modalcliente.page.scss'],
})
export class ModalclientePage implements OnInit {
@Input() cliente: Cliente;
@Input() atualizar: boolean;
visualizar = false;
dados = {
  id: '',
  nome: '',
  qualificacao: '',
  rua: '',
  numero: '',
  bairro: '',
  cidade: '',
  telefone: '',
  localizacao: ''
}
  constructor(
    private modalCtrl: ModalController,
    private service: clienteService
  ) { }

  ngOnInit() {
    if(this.cliente){
      if (this.atualizar == false){
          this.visualizar = true;
      }
      this.dados = this.cliente;
    }
  }
fecharModal(){
  this.modalCtrl.dismiss();
}

enviando(form: NgForm){
  const cliente = form.value;
  if(this.atualizar){
    this.service.update(cliente, this.cliente.id).subscribe(Response =>{
      this.modalCtrl.dismiss(Response);
    })
  }else{
  this.service.create(cliente).subscribe(response =>{
    this.modalCtrl.dismiss(response);
  })
}}

}
