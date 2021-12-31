import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
    ) { }

    // Get pokemons
    getPokemons(limit: 8, offset: number) {
      offset = offset * limit - limit
      var link2 = "https://pokeapi.co/api/v2/pokemon?limit=8&offset=" + offset;
      return this.http.get(link2);
    }

    // Get more pokemons data
    getMoreData(name: string) {
      var link = "https://pokeapi.co/api/v2/pokemon/" + name;
      return this.http.get(link);
    }
}
