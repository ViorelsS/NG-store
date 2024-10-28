import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  cols: number = 3;
  category: string | undefined;

  constructor() {}

  ngOnInit(): void {}

  onColumnCountChange(colsNum: number): void {
    this.cols = colsNum;
  }

  onShowCategory(newCategory: string): void {
    console.log("Category received:", newCategory);
    this.category = newCategory;
  }
}