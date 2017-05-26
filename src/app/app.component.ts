import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartQueries, RootStore } from './common/cart.reducer';

@Component({
  selector: 'smt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cartItemsNumber = 0;

  constructor(private store: Store<RootStore>) {
  }

  ngOnInit(): void {
    this.store.select(CartQueries.itemsNumber)
      .subscribe(itemsNumber => this.cartItemsNumber = itemsNumber);
  }
}
