import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notesApiUrl = 'https://localhost:44395/api/notes';

  // if backend is not running on IIS
  //private notesApiUrl = 'https://localhost:5001/api/notes';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public async getNotes() {
    return await this.http.get<Note[]>(this.notesApiUrl).toPromise();
  }

  public async findNote(id: string){
    return await this.http.get<Note>(this.notesApiUrl + '/' + id).toPromise();
  }

  public async addNote(note : Note){
    return await this.http.post<any>(this.notesApiUrl + '/create', note).toPromise();
  }

  public async updateNote(noteToChange: Note){
    return await this.http.put(this.notesApiUrl + '/update', noteToChange, this.createHeader('application/json')).toPromise();
  }

  public async removeNote(noteToRemove: Note){
    return await this.http.delete(this.notesApiUrl + '/remove/'+ noteToRemove.id, this.createHeader('application/json')).toPromise();
  }

  private createHeader(contentType: string): any {
    return { headers: new HttpHeaders({ 'Content-Type': contentType }), responseType: 'text' };
  }
  
}
