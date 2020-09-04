import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre      :   string='CApItAn AmErIcA JnOn';
  arraid      :   number[] = [1,2,3,4,5,6,7,8,9,10];
  PI          :   number=Math.PI;
  porcentaje  :   number=0.2345;
  salario     :   number = 1234.5;
  fecha       :   Date= new Date();
  idioma      :   string = 'es';
  videoUrl    :   string = "https://www.youtube.com/embed/OPWgm6Q97Bg";
  cap         :   boolean = true;
  activar     :   boolean = true;

  valorPromesa = new Promise<string>((resolve)=>{
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  })

  heroe={
    nombre:'Logan',
    clave:'wolverine',
    edad:150,
    direccion:{
      calle:'Primera',
      casa:20
    }
  }
}
