import { Component } from '@angular/core';
import { SearchPokemonComponent } from '../../components/search-pokemon/search-pokemon.component';

@Component({
  selector: 'app-pokemon-page',
  standalone: true,
  imports: [SearchPokemonComponent],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css'
})
export class PokemonPageComponent {

}
