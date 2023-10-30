import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";

interface Drink{}
@Injectable({
    providedIn: "root",
})
export class ApiService {
    private searchByLetterUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
    private searchByIdUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
    private searchByDrinkNameUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
    private searchByIngredientNameUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=";

    constructor(private http: HttpClient) {}

    searchByLetter(letter: string) {
        return this.http.get(this.searchByLetterUrl + letter) as Observable<allDrinks>;
    }

    searchById(id: string) {
        return this.http.get(this.searchByIdUrl + id) as Observable<allDrinks>;
    }

    searchByDrinkName(drinkName: string) {
        return this.http.get(this.searchByDrinkNameUrl + drinkName) as Observable<allDrinks>;
    }
}