import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProductos } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading = true;
  producto : IProductos[] = [];
  constructor(private http : HttpClient) {  this.getProducts();}

  private getProducts(){
      this.http.get('https://angular-html-75781.firebaseio.com/productos_idx.json').subscribe(
        (response : IProductos[]) =>{ 
          console.log(response); 
          this.loading = false;
          this.producto = response;
        }
      );
  }

}
