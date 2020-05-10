import { Component, OnInit } from '@angular/core';
import {ArticuloFamilia} from '../models/articulos-familia';
import {ArticulosFamilia} from '../models/articulos-familia-collection';

@Component({
  selector: 'app-articulos-lista',
  templateUrl: './articulos-lista.component.html',
  styleUrls: ['./articulos-lista.component.css']
})
export class ArticulosListaComponent implements OnInit {
  listaArt: ArticuloFamilia[];
  verGrilla = false;
  msj = 'Mostrar grilla';

  constructor() {}

  ngOnInit(): void {
    this.listaArt = ArticulosFamilia;
  }


  mostrarGrilla():void{
    this.msj = this.verGrilla?'Mostrar grilla':'Ocultar grilla';
    this.verGrilla = !this.verGrilla;
  }
}