import { Component, OnInit } from '@angular/core';
import {ArticuloFamilia} from '../models/articulos-familia';
import {ArticulosFamilia} from '../models/articulos-familia-collection';

@Component({
  selector: 'app-articulos-lista',
  templateUrl: './articulos-lista.component.html',
  styleUrls: ['./articulos-lista.component.css']
})
export class FamiliaArtListaComponent implements OnInit {
  listaArt: ArticuloFamilia[];

  constructor() {}

  ngOnInit(): void {
    this.listaArt = ArticulosFamilia;
  }
}