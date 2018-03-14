import { Component, OnInit, Input } from '@angular/core';
import { Vivienda } from '../../model/vivienda';

@Component({
  selector: 'app-vivienda',
  templateUrl: './vivienda.component.html',
  styleUrls: ['./vivienda.component.scss']
})
export class ViviendaComponent implements OnInit {

  // Atributos del componenete Padre
  @Input('vivienda') vivienda: Vivienda;

  constructor() { }

  ngOnInit() {
  }

}
