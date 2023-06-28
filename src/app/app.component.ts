import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'lista-MiguelangelLugo';



  usuario = {
    nombre:"",
    apellido: ""
  }

  alumno = {
    nombre:""
  }

  alumnos = ['Maria', 'Juana', 'Miguel', 'Jose', 'Jesus', 'Nathalie'];


  guardar(event:MouseEvent):void{
    console.log("metodo guardar - variable event ", event);
    console.log("variable nombre ", this.usuario.nombre);
    console.log("variable apellido ", this.usuario.apellido);
  }

  agregarAlumno():void{
    this.alumnos.push(this.alumno.nombre);
  }


}
