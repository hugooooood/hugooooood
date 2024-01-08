import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.interfaz';

@Component({
  selector: 'search-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './search-pokemon.component.html',
  styleUrl: './search-pokemon.component.css'
})
export class SearchPokemonComponent implements OnInit {
  constructor(private servicePokemon: PokemonService){ }

  pokemon?: Pokemon;

  ngOnInit(): void {
    this.servicePokemon.getPokemon().subscribe(
    {
      next:(poke: Pokemon|undefined)=>{
        console.log(poke)
        this.pokemon= poke;
      }
    }
    )
  }

}
