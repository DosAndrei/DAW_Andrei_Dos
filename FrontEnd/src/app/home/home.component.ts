import { Component, OnInit, ViewChild } from '@angular/core';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(NoteComponent) notesComponent: NoteComponent;
  
  constructor() { }

  ngOnInit(): void {
  }

  changeFilter(event: any){
    this.notesComponent.filter(event);
  }

}
