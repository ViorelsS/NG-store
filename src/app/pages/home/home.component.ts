import { Component, OnInit } from "@angular/core";

const ROWS_HEIGHT: { [id: number]: number } = {
  1: 400,
  3: 335,
  4: 350,
};

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  cols: number = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;

  constructor() {}

  ngOnInit(): void {}

  onColumnCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[colsNum];
  }

  onShowCategory(newCategory: string): void {
    console.log("Category received:", newCategory);
    this.category = newCategory;
  }
}
