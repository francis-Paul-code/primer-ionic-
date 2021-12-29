import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../pages/notes/Note';

const options = {
  headers: new HttpHeaders({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'Content-Type' : 'Application/Json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private apiUrl = 'http://localhost:8080/primer/notes/';

  constructor(private http: HttpClient) {}

 getNote(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getSingle(id: string): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id);
  }

  updateNote(id: string, note: Note): Observable<Note> {
    return this.http.patch<Note>(this.apiUrl + '/' + id, note, options);
  }
  deletenote(id: string): Observable<Note> {
    console.log(id);
    return this.http.delete<Note>(this.apiUrl + '/' + id);
  }
  addNote(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item, options);
  }
}
