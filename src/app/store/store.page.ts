import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { StoreService } from '../services/store.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  public productos!: Array<Product>;
  public producto!: Product;

  constructor(private _service: StoreService, private _acitveRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.loadProducts();
    this.loadById();
  }

  loadProducts(): void {
    this._service.getProducts().subscribe(response => {
      console.log(response);
      this.productos = response;
    })
  }
  loadById(): void {
    
      this._service.getProducts().subscribe(response => {
        console.log(response);
        this.producto = response;
        
      })
  }

}
