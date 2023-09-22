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
  constructor(
    public _apiService : ApiService
  ) {}

  addStudent(){
    let data = {
      nombre : this.nombre,
      correo : this.correo
    }

    this._apiService.addStudent(data).subscribe((res:any) => {
      console.log("SUCCESS ===",res);
    },(error: any) => {
      console.log("ERROR ===",error);

    })
  }
}
