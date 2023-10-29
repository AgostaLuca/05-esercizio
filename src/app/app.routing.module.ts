import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DettaglioDrink } from "./dettaglio/dettaglio.component";
import { ErrorPage } from "./ErrorPage/errorPage.component";

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home/dettaglio/:id", component: DettaglioDrink },
    { path: "**", component: ErrorPage },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}