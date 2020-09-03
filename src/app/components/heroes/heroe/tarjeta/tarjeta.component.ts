import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html'
})
export class TarjetaComponent implements OnInit {

  //entrada de valores desde la etiqueta
  @Input() heroe:any ={};
  @Input() index: number;

  //llamada a padre Output, EventEmitter
  @Output() heroeSeleccionado:EventEmitter<number>;

  constructor(private router :Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){    
    //this.heroeSeleccionado.emit(this.index); // llamada a padre
    this.router.navigate(['/heroe/',this.index]);
  }
}
