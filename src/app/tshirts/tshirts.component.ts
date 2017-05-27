import { Component, OnInit } from '@angular/core';
import { TshirtsService } from './tshirts.service';
import { Observable } from 'rxjs/Observable';
import { Tshirt } from './tshirt.model';
import { RootStore } from 'app/common';
import { Store } from '@ngrx/store';

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
  }
}
