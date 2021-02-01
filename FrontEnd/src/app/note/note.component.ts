import { Component, OnInit } from "@angular/core";
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: "app-note",
  templateUrl: "./note.component.html",
  styleUrls: ["./note.component.scss"],
})
export class NoteComponent implements OnInit {

  notes: Note[];

  constructor( private noteService: NoteService) {}

  async ngOnInit() {
    await this.refresh();
  }

  async changeStatus(note: Note, status: number){
    note.status = status;
    await this.noteService.updateNote(note);
    await this.refresh();
  }

  async removeNote(note: Note){
    await this.noteService.removeNote(note);
    await this.refresh();
  }

  async filter(status: number){
    if(status !== undefined){
      this.notes = (await this.noteService.getNotes()).filter(n => n.status === status);
    }else{
      this.refresh();
    }
  }

  async refresh(){
    this.notes = [];
    this.notes = await this.noteService.getNotes();
  }
}
