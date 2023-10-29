import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ApiService } from "src/api.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-dettaglio",
    templateUrl: "./dettaglio.component.html",
})
export class DettaglioDrink implements OnInit {
    drink!: drink;

    idDrink: string | undefined = undefined;
    ingredientsMeasurements: string[][] = [];
    lang: string = "EN";

    constructor(
        private http: HttpClient,
        private activatedRoute: ActivatedRoute,
        private Location: Location,
        private apiService: ApiService,
        private router: Router
    ) {}
    tornaIndietro() {
        this.Location.back();
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.idDrink = params["id"];

            this.cambiaLingua("EN");
            // if (params["lang"]) 
            //     this.lang = params["lang"];

            // const parts: string[] | undefined = window.location.href.split("/");
            // this.idDrink = parts.pop();

            if (this.idDrink) {
                this.apiService.searchById(this.idDrink).subscribe((response) => {
                    if (response && response.drinks) {
                        this.drink = response.drinks[0];

                        for (let i: number = 1; i <= 15; i++) {
                            let key: string = "strIngredient" + i;
                            this.ingredientsMeasurements.push([]);
                            this.ingredientsMeasurements[i - 1][0] = (this.drink as any)[key];
                            this.ingredientsMeasurements[i - 1][2] = "https://www.thecocktaildb.com/images/ingredients/" + (this.drink as any)[key] + ".png";
                        }

                        for (let i: number = 1; i <= 15; i++) {
                            let key: string = "strMeasure" + i;
                            this.ingredientsMeasurements[i - 1][1] = (this.drink as any)[key];
                        }
                    } else {
                        this.router.navigate(["/errorPage"]);
                    }
                });
            }
        });
    }
    cambiaLingua(language: string) {
        console.log("chiamata");
        this.lang = language;
    }
}