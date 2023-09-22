import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient
  ) { }

  addStudent(data: { nombre: any; correo: any; }){
    return this.http.post('http://localhost/Desktop/el_crud/backend/create.php',data);
  }
}
