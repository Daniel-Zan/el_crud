import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 headers:HttpHeaders;

  constructor(
    public http: HttpClient
  ) {
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin','*');
   }

  addStudent(data: { nombre: any; correo: any; }){
    return this.http.post('http://localhost/el_crud/backend/create.php',data);
  }

  getStudents(){
    return this.http.get('http://localhost/el_crud/backend/getStudents.php');
  }

  deleteStudent(){
    return this.http.delete('http://localhost/el_crud/backend/delete.php?id=');
  }
}
