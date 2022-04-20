import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
  public usuarioModel: Usuario;
  private _router:Router;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
    ) {
    this.usuarioModel = new Usuario(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      [{
        nombreProducto: "",
        cantidadComprada: 0,
        precioUnitario: 0
      }],
      0
    );
  }

  ngOnInit(): void {
  }

  getToken(){
    this._usuarioService.login(this.usuarioModel, "true").subscribe(
      (response)=>{
        console.log(response.token);
        localStorage.setItem("token", response.token)
      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }

<<<<<<< Updated upstream
  getTokenPromesa(): Promise<any> {
    return new Promise((resolve, reject)=>{
      this._usuarioService.login(this.usuarioModel, "true").subscribe(
        (response)=>{
          localStorage.setItem("token", response.token)
=======
  getTokenPromesa():Promise<any>{
    return new Promise((resolve, reject)=>{
      this._usuarioService.login(this.usuarioModel, "true").subscribe(
        (response)=>{
          console.log(response.token);
          localStorage.setItem("token", response.token);
>>>>>>> Stashed changes
          resolve(response);
        },
        (error)=>{
          console.log(<any>error);

        }
      )
    })
  }

  login(){
    this._usuarioService.login(this.usuarioModel).subscribe(
<<<<<<< Updated upstream
      (response)=>{

        this.getTokenPromesa().then(respuesta => {
          console.log(respuesta);
          localStorage.setItem('identidad', JSON.stringify(response.usuario))

          this._router.navigate(['/usuario/productos']);
        })
=======
      (response)=>{this.getTokenPromesa().then(respuesta =>{
        console.log(response.usuario);
        localStorage.setItem('identidad', JSON.stringify(response.usuario));
        this.getToken();
        this._router.navigate(['usuario/productos']);})
>>>>>>> Stashed changes
      },
      (error)=>{
        console.log(<any>error);
      }
    );
  }

}
