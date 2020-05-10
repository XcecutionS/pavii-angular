import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormsModule} from '@angular/forms';
import {ArticulosFamilia} from '../models/articulos-familia-collection';

@Component({
  selector: 'app-articulos-carga',
  templateUrl: './articulos-carga.component.html',
  styleUrls: ['./articulos-carga.component.css']
})
export class ArticulosCargaComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  fg: FormGroup;


  ngOnInit() {
    this.fg = this.fb.group({
      IdArticuloFamilia: [''],
      Nombre: ['']
    });
  }

  grabar(){
    ArticulosFamilia.push({
      IdArticuloFamilia: Number(this.fg.value.IdArticuloFamilia),
      Nombre: this.fg.value.Nombre});
    window.alert("grabado");
  }
}