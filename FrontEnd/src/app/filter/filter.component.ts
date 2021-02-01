import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Status } from '../category';
import { FiltersService } from '../filters.service';

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {

  @Output() filterChanged: EventEmitter<any> = new EventEmitter();

  categories : string[];

  constructor() {}
  ngOnInit(): void {
    this.categories = ["To do", "In progress", "Done"];
  }

  public selectCategory(category: string){
    this.filterChanged.emit(this.categories.indexOf(category));
  }

  public removeFilters(){
    this.filterChanged.emit(undefined);
  }
}
