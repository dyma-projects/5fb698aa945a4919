import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  clickOnComposant2(): void {
    console.log("clic");
  }
}
