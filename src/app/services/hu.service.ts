import { Injectable } from '@angular/core';
import { HU } from '../models/hu.model';

@Injectable({
  providedIn: 'root'
})
export class HuService {

  constructor() { }

  items = [];

  addToCart(hu) {
    var index = this.items.findIndex(x => x.hu==hu.hu); 

    if(index == -1){
      this.items.push(hu);
    }
    else{
      alert("Item ya existe")
    }
  }

  getItems() {
    return this.items;
  }

  clearItem(index) {
    this.items.splice(index,1);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
