import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
<<<<<<< Updated upstream
  styleUrls: ['./graficas.component.scss'],
  providers: [ProductosService, UsuarioService]
=======
  styleUrls: ['./graficas.component.scss']
>>>>>>> Stashed changes
})
export class GraficasComponent implements OnInit {
  chartOptions = {
    responsive: true,
  };
<<<<<<< Updated upstream

  //NOMBRES PRODUCTOS
  chartLabels:any = [];
  //CANTIDAD PRODUCTOS
  chartData:any = [];
  chartColors:any = [
    {
      backgroundColor: []
    }
  ];
  chartLegend = true;
  chartPlugins = [];

  public modelProductosGet:any = [];



  constructor(
    public _productosService: ProductosService,
=======
  chartLabels = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  chartData:any = [];
  chartColors:any = [
    {
    backgroundColor: ['']
  }
  ];
  chartLegend = true;
  chartPlugins = [];
  modelProductos: any;
  modelProductosGet: any;

  constructor(
    public _prodctosService: ProductosService,
>>>>>>> Stashed changes
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
<<<<<<< Updated upstream
    this.getProductos()
  }

  getProductos(){
    this._productosService.obtenerProductos(this._usuarioService.getToken()).subscribe(
      (response)=>{
        console.log(response.productos);
        this.modelProductosGet = response.productos;
        this.modelProductosGet.forEach(dato => {
          this.chartLabels.push(dato.nombre);
          this.chartData.push(dato.cantidad);
          this.chartColors[0].backgroundColor.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
        })
      },
      (error)=>{

      }
=======
  }

  getProductos(){
    this._prodctosService.obtenerProductos(this._usuarioService.getToken()).subscribe((response) => {
      console.log(response);
      this.modelProductos = response.productos;
      this.modelProductosGet.forEach(dato => {
        console.log(dato.nombre);
        this.chartLabels.push(dato.nombre);
        this.chartData.push(dato.cantidad);
        this.chartColors[0].backgroundColor.push(`#${Math.floor(Math.random()*16777215).toString(16)}`)

      })
    },
  (error) => {

  }
>>>>>>> Stashed changes
    )
  }

}
