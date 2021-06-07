import { DadosseriesService } from './../services/dadosseries.service';
import { ISerie } from './../models/ISerie.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-serie',
  templateUrl: './dados-serie.page.html',
  styleUrls: ['./dados-serie.page.scss'],
})
export class DadosSeriePage implements OnInit {

  serie: ISerie;
  constructor(public dadosService: DadosseriesService) { }

  ngOnInit() {
    this.serie = this.dadosService.pegarDados('serie');
    console.log('serie enviada', this.serie);
  }

}
