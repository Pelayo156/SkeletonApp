import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  idSelected: number = 1;

  // Variables para que el usuario pueda crear un post
  title: string = '';
  body: string = '';
  userId: number = 1;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

  // Función para obtener objeto
  getPost(id:number) {
    this.apiService.getPost(id).subscribe(post => {
      console.log(post);
    }, (error) => {
      alert(`No existe un objeto con id: ${id}`)
      console.log(error)
    });
  }

  // Función para crear objeto
  createPost(title:string, body:string, userId:number) {
    let post = {
      title: title,
      body: body,
      userId: userId
    }
    this.apiService.createPost(post).subscribe((success) => {
      console.log(success);
    }, (error) => {
      console.log(error)
    });
  }

  // Función para eliminar un objeto
  deletePost(id:number) {
    this.apiService.deletePost(id).subscribe((success) => {
      console.log(success);
    }, (error) => {
      console.log(error);
    });
  }

  // Función para editar un objeto
  editPost(id:number, title:string, body:string, userId:number) {
    let post = {
      title: title,
      body: body,
      userId: userId
    }
    this.apiService.editPost(id, post).subscribe((post) => {
      console.log(post);
    }, (error) => {
      console.log(error);
    });
  }
}