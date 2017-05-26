import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'smt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  cartItemsNumber = 0;

  private subscriptions = [] as Subscription[];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.cartService.get().map(cart => cart.stickers.length)
        .subscribe(itemsNumber => this.cartItemsNumber = itemsNumber)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
