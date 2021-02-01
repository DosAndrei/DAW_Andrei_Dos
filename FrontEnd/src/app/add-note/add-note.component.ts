import { Component, OnInit } from "@angular/core";
import { NoteService } from '../note.service';
import { Note } from '../note';
import { Status } from "../category";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-note",
  templateUrl: "./add-note.component.html",
  styleUrls: ["./add-note.component.scss"],
})
export class AddNoteComponent implements OnInit {
  noteTitle: string;
  noteDescription: string;
  constructor(private noteService: NoteService, private router: Router) {}

  ngOnInit(): void {
  }

  public async AddNote(){
    let noteToAdd : Note = {id: undefined, title: this.noteTitle, description: this.noteDescription, status: Status.ToDo};
    await this.noteService.addNote(noteToAdd);
    this.router.navigateByUrl('/')
  }
}
