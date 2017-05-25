import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Sticker } from './sticker.model';
import 'rxjs/add/observable/from';


const STICKERS = [
  { name: 'tools', imageUrl: 'assets/stickers/img/tools-2308444_960_720.png' },
  { name: 'phone', imageUrl: 'assets/stickers/img/e-commerce-2308541_960_720.png' },
  { name: 'panda', imageUrl: 'assets/stickers/img/panda-2308269_960_720.png'},
  { name: 'red dot', imageUrl: 'assets/stickers/img/tag-1703953_960_720.png'},
  { name: 'rabbit on the wall', imageUrl: 'assets/stickers/img/sticker-1049722_960_720.jpg'},
  { name: 'ice cream', imageUrl: 'assets/stickers/img/ice-cream-2308293_960_720.png'}
] as Sticker[];

@Injectable()
export class StickersService {

  public GetAll(): Observable<Sticker[]> {
    return Observable.from([STICKERS]);
  }
}
