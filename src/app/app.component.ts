import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { RootStore } from './common';
import { CartQueries } from './common/index';

@Component({
  selector: 'smt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  cartItemsNumber = 0;

  private subscriptions = [] as Subscription[];

  constructor(private store: Store<RootStore>) {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.store.select(CartQueries.itemsNumber)
        .subscribe(length => this.cartItemsNumber = length)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
