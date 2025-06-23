import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Task {
  id?: string;
  description: string;
  day: string; // formato ISO yyyy-mm-dd
  hour: string; // formato HH:mm:ss
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private baseUrl = 'http://localhost:8080/api/tasks';

  constructor(private http: HttpClient) {}

  getTasksByUser(userId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/user/${userId}`);
  }

  createTask(userId: string, task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}/user/${userId}`, task);
  }

  updateTask(taskId: string, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}/${taskId}`, task);
  }

  deleteTask(taskId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${taskId}`);
  }
}
