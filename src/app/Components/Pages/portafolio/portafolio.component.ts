import { Component, OnInit } from '@angular/core';
import { ProductosService } from './../../../services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styles: []
})
export class PortafolioComponent implements OnInit {

  constructor(public productoService : ProductosService) { console.log(productoService);}

  ngOnInit() {
  }

}
