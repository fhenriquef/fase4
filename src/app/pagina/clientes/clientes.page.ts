import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Cliente, clienteService } from 'src/app/servico/cliente.service';
import { ModalclientePage } from '../modalcliente/modalcliente.page';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
clientes: Cliente[];
  constructor(private service: clienteService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
    ) { }

  ngOnInit()
  {
    this.service.getAll().subscribe(response => {
      this.clientes = response;
    })
  } 

  remover(id: any){
    this.service.remove(id).subscribe(() => {
      this.service.getAll().subscribe(response => {
      this.clientes = response;
      })
    })
  }

novoCliente(){
  this.modalCtrl.create({
    component: ModalclientePage
  }).then(modal => {
    modal.present();
    return modal.onDidDismiss();
  }).then(({data}) =>{
    this.service.getAll().subscribe(response => {
    this.clientes = response;
    });
      this.toastCtrl.create({
        message: 'Mecânico cadastrado com sucesso',
        duration: 2000
      }).then(toast =>{
        toast.present();
      })
  })
}

atualizar(c: Cliente){
  this.modalCtrl.create({
    component: ModalclientePage,
    componentProps: {c}
  }).then(modal =>{
    modal.present();
    return modal.onDidDismiss();
  }).then(({data}) =>{
    this.service.getAll().subscribe(response =>{
      this.clientes = response;
    });
    this.toastCtrl.create({
      message: 'Mecânico atualizado com sucesso',
      duration: 2000
    }).then(toast =>{
      toast.present();
    })

  })
}


visualizar(c: Cliente){
  this.modalCtrl.create({
    component: ModalclientePage,
    componentProps: {c}
  }).then(modal =>{
    modal.present();
    return modal.onDidDismiss();
  }).then(({data}) =>{
    this.service.getAll().subscribe(response =>{
      this.clientes = response;
    });

  })
}

}
