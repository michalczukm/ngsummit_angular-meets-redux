import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootStore } from '../common';
import { TshirtAddAction } from '../common/cart.reducer';
import { TshirtsService } from './tshirts.service';
import { Tshirt } from './tshirt.model';

@Component({
  selector: 'smt-tshirts',
  templateUrl: './tshirts.component.html',
  styleUrls: ['./tshirts.component.css']
})
export class TshirtsComponent implements OnInit {
  tshirts$: Observable<Tshirt[]>;

  constructor(private tshirtsService: TshirtsService,
              private store: Store<RootStore>) { }

  ngOnInit() {
    this.tshirts$ = this.tshirtsService.GetAll();
  }

  buy(tshirt: Tshirt) {
    this.store.dispatch(new TshirtAddAction(tshirt));
  }
}
