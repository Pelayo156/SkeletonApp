import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private apiURL = 'https://jsonplaceholder.typicode.com';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  // Función para obtener un objeto es específico
  getPost(id:number):Observable<any> {
    return this.http.get(`${this.apiURL}/posts/${id}`).pipe(
      // Esto significa que si llegara a no ejecutarse lo volvería a intentar 3 veces más
      retry(3)
    );
  }

  // Función para crear un objeto
  createPost(post:object):Observable<any> {
    return this.http.post(this.apiURL+'/posts/', post, this.httpOptions).pipe(
      retry(3)
    );
  }

  // Función para eliminar un objeto
  deletePost(id:number):Observable<any> {
    return this.http.delete(`${this.apiURL}/posts/${id}`).pipe(
      retry(3)
    );
  }

  // Función para editar objeto
  editPost(id:number, post:object):Observable<any> {
    return this.http.patch(`${this.apiURL}/posts/${id}`, post, this.httpOptions).pipe(
      retry(3)
    );
  }
}
