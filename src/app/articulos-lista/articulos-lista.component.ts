import { Component, OnInit } from '@angular/core';
import {ArticuloFamilia} from '../models/articulos-familia';
import {ArticulosFamilia} from '../models/articulos-familia-collection';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-articulos-lista',
  templateUrl: './articulos-lista.component.html',
  styleUrls: ['./articulos-lista.component.css']
})
export class ArticulosListaComponent implements OnInit {
  listaArt: ArticuloFamilia[];
  verGrilla = false;
  msj = 'Mostrar grilla';
  id: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.listaArt = ArticulosFamilia;
    this.id= this.route.snapshot.paramMap.get("id");
  }


  mostrarGrilla():void{
    this.msj = this.verGrilla?'Mostrar grilla':'Ocultar grilla';
    this.verGrilla = !this.verGrilla;
  }
}