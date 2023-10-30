import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/api.service";
import { ChangeDetectorRef } from "@angular/core";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
    drinks: Array<drink> = [];
    letteraSelezionata = "";
    letters: Array<string> = [];
    typeDrink = "";
    drinkName = "";
    ingredientName = "";

    constructor(private http: HttpClient, private apiService: ApiService, private changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit() {
        for (let i = 97; i <= 122; i++) {
            this.letters.push(String.fromCharCode(i));
        }
        for(let i=1; i<10; i++){
            this.letters.push("" + i);
        }
        this.chiamataApi("a");
    }

    chiamataApi(lettera: string) {
        this.typeDrink = "";
        this.drinkName = "";
        this.ingredientName = "";
        this.letteraSelezionata = lettera;
        this.apiService.searchByLetter(lettera).subscribe((data) => {
            if (data && data.drinks?.length > 0) this.drinks = data.drinks;
            else this.drinks = [];
        });
    }

    chiamataApiTypeDrink(typeDrink: string) {
        this.typeDrink = typeDrink;
        this.drinkName = "";
        this.ingredientName = "";
        this.apiService.searchByLetter(this.letteraSelezionata).subscribe((data) => {
            if (data && data.drinks?.length > 0) 
            {
                let tempDrinks = data.drinks;
                this.drinks = [];
                for (let i = 0; i < tempDrinks.length; i++) {
                    if (tempDrinks[i].strAlcoholic === typeDrink) {
                        this.drinks.push(tempDrinks[i]);
                    }
                }
            }
            else this.drinks = [];
            this.changeDetectorRef.detectChanges();
        });
    }

    chiamaApiDrinkName(drinkName: string) {
        this.drinkName = drinkName;
        this.ingredientName = "";
        this.letteraSelezionata = "";
        this.apiService.searchByDrinkName(drinkName).subscribe((response) => {
            if (response && response.drinks?.length > 0) 
            {
                let tempDrinks = response.drinks;
                this.drinks=[];
                if(this.typeDrink)
                {
                    for (let i = 0; i < tempDrinks.length; i++) {
                        if (tempDrinks[i].strAlcoholic === this.typeDrink) {
                            this.drinks.push(tempDrinks[i]);
                        }
                    }
                }
                else
                {
                    this.drinks = tempDrinks;
                }
            } 
            else this.drinks = [];
            this.changeDetectorRef.detectChanges();
        });
    }
}
