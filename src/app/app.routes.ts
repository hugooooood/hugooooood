import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'home', loadComponent:()=> import('./pokemon/pages/pokemon-page/pokemon-page.component').then(m=>m.PokemonPageComponent)
},
{
    path: '**',redirectTo: 'home'
}
];
