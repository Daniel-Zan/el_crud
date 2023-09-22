import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: any;
  correo: any;
  estudiantes: any =[];
  constructor(
    public _apiService : ApiService
  ) {
    this.getStudents();
  }

  addStudent(){
    let data = {
      nombre : this.nombre,
      correo : this.correo
    }

    this._apiService.addStudent(data).subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.nombre='';
      this.correo='';
      alert('SUCESS');
      this.getStudents();
    },(error: any) => {
      alert('ERROR');
      console.log("ERROR ===",error);

    })
  }

  getStudents(){
    this._apiService.getStudents().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.estudiantes = res;
    },(error: any) => {
      alert('ERROR');
      console.log("ERROR ===",error);

    })
  }

  deleteStudent(){
    this._apiService.deleteStudent().subscribe((res:any)=>{
      console.log("SUCCESS");
      this.getStudents ();
    },(err:any) => {
      console.log("ERROR")
    })
  }
}
