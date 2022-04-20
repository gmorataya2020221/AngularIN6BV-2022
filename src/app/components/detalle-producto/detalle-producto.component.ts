import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
<<<<<<< Updated upstream
  styleUrls: ['./detalle-producto.component.scss'],
  providers: [ProductosService]
})
export class DetalleProductoComponent implements OnInit {

  constructor(
    public _activatedRoute: ActivatedRoute,
    public _productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
=======
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

  constructor(public _activatedRoute : ActivatedRoute,
    public _productosService: ProductosService) {
   }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
>>>>>>> Stashed changes
      console.log(dataRuta.get('idProducto'));
      this.getProductoId(dataRuta.get('idProducto'))
    })
  }

  getProductoId(idProducto){
<<<<<<< Updated upstream
    this._productosService.obtenerProductoId(idProducto).subscribe(
      (response)=>{
        console.log(response);

      },
      (error)=>{

      }
=======
    this._productosService.obtenerProductoId(idProducto).subscribe((response) => {
      console.log(response);
    },
    (error) => {

    }
>>>>>>> Stashed changes
    )
  }

}
