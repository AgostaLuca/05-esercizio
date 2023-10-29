import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";


@Component({
    selector: "app-errorPage",
    templateUrl: "./errorPage.component.html",
})
export class ErrorPage implements OnInit {
    constructor(private Location: Location) {}
    ngOnInit() {}
    tornaIndietro() {
        console.log("indetro");
        this.Location.back();
    }
}
