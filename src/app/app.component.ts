import { Component } from '@angular/core';
import { PageInformationService } from './services/page-information.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public information : any = {};
  constructor(
    public pageInformationService : PageInformationService,
    public productoService : ProductosService
  ){
    
  }
}
