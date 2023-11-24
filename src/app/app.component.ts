import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { StoreService } from './services/store.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public productos!: Array<Product>;

  
  constructor(private _service: StoreService) {

  }

  ngOnInit(): void {
    this.loadProducts();
  }
  

  loadProducts(): void {
    this._service.getProducts().subscribe(response => {
      console.log(response);
      this.productos = response;
    })
  }

}
