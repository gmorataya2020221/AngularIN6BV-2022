import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  providers: [ProductosService, UsuarioService]
})
export class ProductosComponent implements OnInit {

  public productosModelGet: Productos;
  public productosModelPost: Productos;
  public productosModelGetId: Productos;
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  public token;
  constructor(
    private _productosService: ProductosService,
    private _usuarioService: UsuarioService
    ) {
    this.productosModelPost = new Productos(
      '',
      '',
      [],
      [{
        idProveedor: ''
      }],
      0,
<<<<<<< Updated upstream
      0);
    this.productosModelGetId = new Productos('', '',[],[{ idProveedor: '' }], 0, 0);
    this.token = this._usuarioService.getToken();
=======
      0)
    this.productosModelGetId= new Productos('','',[],[{idProveedor:''}],0,0);
    this.token = this._usuarioService.getToken()
>>>>>>> Stashed changes
  }

  ngOnInit(): void {
    this.getProductos();
  }
  getProductosId(idProducto){
    this._productosService.obtenerProductoId(idProducto).subscribe(
      (response) => {
        console.log(response);
        this.productosModelGetId
      },
      (err) => {

      }
    )
  }

  putProducto(){
    this._productosService.editarProducto(this.productosModelGetId).subscribe((response) => {
      console.log(response);
      this.getProductos();
    },
    (error) => {

    }
    )
  }

  getProductos(){
    this._productosService.obtenerProductos(this.token).subscribe(
      (response) => {
        this.productosModelGet = response.productos;
        console.log(response);
      },
      (error) => {
        console.log(<any>error);

      }
    )
  }

  getProductosId(idProducto){
    this._productosService.obtenerProductoId(idProducto).subscribe(
      (response)=>{
        console.log(response);
        this.productosModelGetId = response.producto;
      },
      (error)=>{

      }
    )
  }

  putProducto(){
    this._productosService.editarProducto(this.productosModelGetId).subscribe(
      (response)=>{
        console.log(response);
        this.getProductos()
      },
      (error)=>{

      }
    )
  }

  postProductos(){
    this._productosService.agregarProductos(this.productosModelPost).subscribe(
      (response)=>{
        console.log(response);
        this.getProductos();
        this.productosModelPost.nombre = '';
        this.productosModelPost.cantidad = 0;
        this.productosModelPost.precio = 0;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto Agregado Correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      },
      (error)=>{
        console.log(<any>error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

  deleteProducto(id){
    this._productosService.eliminarProducto(id).subscribe(
      (response)=>{
        console.log(response);
        this.getProductos()
      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }

}
