import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  public productos!: Array<Product>;
  public producto!: Product;

  constructor(private _service: StoreService) {  }

  ngOnInit() {
    this.loadProducts();
    this.loadOnModal();
  }

  loadProducts(): void {
    this._service.getProducts().subscribe(response => {
      console.log(response);
      this.productos = response;
    })
  }
  loadOnModal(): void {
      this._service.getProducts().subscribe(response => {
        console.log(response);
        this.producto = response;
        
      })
  }

}
