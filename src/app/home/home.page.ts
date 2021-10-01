import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { Imovel } from '../model/imovel';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  imovel: Imovel;
  imoves: Observable<Imovel[]>;
  imovelColecao: AngularFirestoreCollection<Imovel>

  ngOnInit(){
    
    this.listarImovel();

  }
  constructor(public firestore: AngularFirestore,
    private toastCtrl: ToastController) {
      
      this.imovel = new Imovel();

    }

    listarImovel(){
      this.imovelColecao = this.firestore.collection('imovel');
      this.imoves = this.imovelColecao.valueChanges();
    }

    gravar(){
      this.imovelColecao.add({ ...this.imovel }).then((res) =>{
        console.log("Arquivo Salvo",res)
      }).catch((res) =>{
        //deu ruim...
        console.log("Erro ao Salvar",res)
      })
      this.imovel = new Imovel();
    }
  
    presentToast() {
      let toast = this.toastCtrl.create({
        message: 'User was added successfully',
        duration: 3000,
        position: 'top'
      });
  
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
  
      toast.present();
    }
  }