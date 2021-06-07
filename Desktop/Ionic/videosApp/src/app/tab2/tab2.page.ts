import { DadosseriesService } from './../services/dadosseries.service';
import { AlertController, ToastController } from '@ionic/angular';
import { DadosService } from './../services/dados.service';
import { ISerie } from './../models/ISerie.models';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  titulo = "Séries";
  listaSeries: ISerie[] = [
    {
        nome:'Lúcifer (2016)',
        lancamento:'06/06/2021',
        duracao: '45m',
        classificacao:85,
        cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hdKxcoV5CFc3sGOmbGXDXbx1cTZ.jpg',
        generos: ['Drama', 'Sci-Fi', 'Fantasy'],
        pagina: '/mortal-kombat'
    },
    {
      nome:'Greys Anatomy (2005)',
      lancamento:'11/02/2021 (BR)',
      duracao: '43m',
      classificacao:82,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1HAm7sxXu9eGVvs8BIAlkCKGaTd.jpg',
      generos: ['Drama'],
      pagina: '/liga-justica'
    }
  ];
  constructor(
    public AlertController: AlertController,
    public toastController: ToastController,
    public DadosService: DadosseriesService,
    public route: Router  ) {}

    exibirSerie(serie: ISerie){
      this.DadosService.guardarDados('serie',serie);
      this.route.navigateByUrl('/dados-serie');
    }
  async exibirAlertaFavorito() {
    const alert = await this.AlertController.create({
      header: 'Alerta!',
      message: 'Deseja Realmente favoritar a série?',
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
      message: 'Série adicionado aos favoritos.',
      duration: 2000,
      color:'success'
    });
    toast.present();
  }
}
