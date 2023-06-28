import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'lista-MiguelangelLugo';
  soyJosue = false;
  bienvenido = "Bienvenido Josue esta es tu casa"
  status = 2;

  usuario = {
    nombre:"",
    apellido: ""
  }

  alumno = {
    nombre:""
  }

  alumnos = ['Maria', 'Juana', 'Miguel', 'Jose', 'Jesus', 'Nathalie'];


  guardar():void{
    console.log("variable nombre ", this.usuario.nombre);
    console.log("variable apellido ", this.usuario.apellido);
    this.validarAlumnoAMostrar();
  }

  validarAlumnoAMostrar(){
    this.alumno.nombre.toLocaleLowerCase()=='josue'?this.setearValores():this.agregarAlumno();
  }

  agregarAlumno():void{
    this.soyJosue = false;
    this.status = 2;
    this.alumnos.push(this.alumno.nombre);
  }

  setearValores(){
    this.soyJosue = true;
    this.status = 1;
  }

}
