import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public tooltip: string;
  public amazingVariable: string;

  constructor() {
    this.tooltip = "Tooltip incroyable";
    this.amazingVariable = "Variable incroyable";
  }

  ngOnInit(): void {}

  clickEvent(): void {
    console.log("Un clic incroyable a eu lieu.");
  }
}
