import { Injectable } from '@angular/core';
import { Status } from './category';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  private notesArray: Note[];
  private currentCategory: Status;

  constructor() { }

  filter(status: Status){
    if(status === undefined){
      return this.notesArray;
    }
    return this.notesArray.filter(this.isCurrentCategory)
  }

  isCurrentCategory(value) {
    return value.category.value === this.currentCategory;
  }

}
