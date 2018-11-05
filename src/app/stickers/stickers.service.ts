import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Sticker } from './sticker.model';

@Injectable()
export class StickersService {
  constructor(private http: Http) { }

  public getAll(): Observable<Sticker[]> {
    return this.http.get('http://localhost:3000/stickers')
      .pipe(
        map(response => response.json() as Sticker[])
      );
  }
}
