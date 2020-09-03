import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe,HeroesService } from '../../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {

  heroe:any ={};

  constructor(
    private activatedRouter:ActivatedRoute,
    private _heroesService: HeroesService
    ) { 
    this.activatedRouter.params.subscribe(params =>{
      //console.log(params['id'])//params.id);
      this.heroe = this._heroesService.getHeroe(params['id']);
    })
  }

  ngOnInit() {
    
  } 

}
