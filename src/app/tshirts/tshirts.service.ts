import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Tshirt } from './tshirt.model';
import 'rxjs/add/observable/from';

@Injectable()
export class TshirtsService {

  constructor(private http: Http) { }

  public GetAll(): Observable<Tshirt[]> {
    return this.http.get('http://localhost:3000/tshirts')
      .map(response => response.json() as Tshirt[]);
  }
}
