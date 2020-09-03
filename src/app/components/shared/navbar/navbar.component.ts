import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  nombreBuscar:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino:string){
    this.nombreBuscar = termino;
    this.router.navigate(['/buscar',termino]);
  }
}
