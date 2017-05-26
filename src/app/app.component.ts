import { Component, ElementRef, OnInit, Renderer, Renderer2, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartQueries, RootStore } from './common/cart.reducer';

declare var $: any;

@Component({
  selector: 'smt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('collapseCart') collapseCart: ElementRef;
  cartItemsNumber = 0;

  constructor(private store: Store<RootStore>,
    private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.store.select(CartQueries.itemsNumber)
      .subscribe(itemsNumber => this.cartItemsNumber = itemsNumber);

    // good old jquery
    $('#collapseExample')
      .on('show.bs.collapse', (_) => { })
      .on('hide.bs.collapse', (_) => { });

    // not working :(
    this.renderer.listen(this.collapseCart.nativeElement, 'show.bs.collapse', (event) => {
      console.log('reached via Renderer2 (addEventListener under the hood): ' + JSON.stringify(event));
    });
  }
}
