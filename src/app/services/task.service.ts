/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../pages/tasks/Task';
const options = {
  headers: new HttpHeaders({
    'Content-Type': 'Application/Json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://192.168.43.190:8080/primer/tasks/';
  constructor(private http: HttpClient) {}
  getTask(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  updateTask(task: Task, id: string): Observable<any> {
    return this.http.patch<any>(this.apiUrl + '/' + id, task, options);
  }
  deleteTask(id: string): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/' + id);
  }
  addTask(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item, options);
  }
}
