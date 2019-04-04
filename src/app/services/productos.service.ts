import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProductos } from '../interfaces/producto.interface';
import { IProductDetail } from '../interfaces/productDetail.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading = true;
  producto : IProductos[] = [];
  searchResult : IProductos[] = [];
  constructor(private http : HttpClient) { 
    this.getProducts();
  }

  public getProducts(){
    return new Promise( (resolve, reject ) =>{
      this.http.get('https://angular-html-75781.firebaseio.com/productos_idx.json').subscribe(
        (response : IProductos[]) =>{ 
          this.loading = false;
          this.producto = response;
          resolve();
        }
      );
    }); 
  }
  searchProduct(termino : string){
    if(this.producto.length === 0){
      this.getProducts().then( () =>{
        this.Filter(termino);
      });
    }else{
      this.Filter(termino);
    }
  }
  public getProductById(productId : string){
      return this.http.get(`https://angular-html-75781.firebaseio.com/productos/${productId}.json`);
  }

  private Filter(termino : string){
    this.searchResult = [];
    this.producto.forEach( (item) => {
      if(item.categoria.toLowerCase().indexOf(termino) != -1 || item.titulo.toLowerCase().indexOf(termino) != -1){
        this.searchResult.push(item);
      }
    });
  }
}
