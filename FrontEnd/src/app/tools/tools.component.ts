import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tools",
  templateUrl: "./tools.component.html",
  styleUrls: ["./tools.component.scss"],
})
export class ToolsComponent implements OnInit {
  title = "Add";
  titleColor = "blue";
  noteContent="note";
  constructor() {}

  ngOnInit(): void {}

  setTitle(): void {
    this.title = "test";
  }
}
