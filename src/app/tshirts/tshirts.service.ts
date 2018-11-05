import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Tshirt } from './tshirt.model';

@Injectable()
export class TshirtsService {

  constructor(private http: Http) { }

  public GetAll(): Observable<Tshirt[]> {
    return this.http.get('http://localhost:3000/tshirts')
      .pipe(
        map(response => response.json() as Tshirt[])
      );
  }
}
