import { IFilme } from './../models/IFilme.models';
import { DadosService } from './../services/dados.service';

import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  titulo = "Vídeos App";
  listaVideos: IFilme[] = [
    {
        nome:'The Flash (2014)',
        lancamento:'06/06/2021',
        duracao: '44m',
        classificacao:76,
        cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg',
        generos: ['Drama', 'Sci-Fi', 'Fantasy'],
        pagina: '/mortal-kombat'
    },
    {
      nome:'Tom & Jerry: O Filme (2021)',
      lancamento:'11/02/2021 (BR)',
      duracao: '1h 41m',
      classificacao:73,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9NvYyM8H6d5KAVGqpyFV9YPO5cU.jpg',
      generos: ['Comédia', 'Família', 'Animação'],
      pagina: '/liga-justica'
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) {}


    exibirFilme(filme: IFilme){
      this.dadosService.guardarDados('filme',filme);
      this.route.navigateByUrl('/dados-filme');
    }
  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja Realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar!',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color:'success'
    });
    toast.present();
  }
}
