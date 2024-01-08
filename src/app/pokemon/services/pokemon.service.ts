import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
import { Pokemon } from "../interfaces/pokemon.interfaz";

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    constructor(private http: HttpClient){}
    url: string = 'https://pokeapi.co/api/v2/pokemon/1'
    getPokemon():Observable<Pokemon| undefined>{
        return this.http.get<Pokemon>(this.url).pipe(
            catchError((error)=> {
                console.log(error)
                return of (undefined)
            })
        )
    }
}