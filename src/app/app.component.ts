import { Component, OnInit } from '@angular/core';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'smt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cartItemsNumber = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.state.subscribe(stickers => {
      this.cartItemsNumber = stickers.length;
    });
  }
}
