import { Injectable } from '@angular/core';
import { payment, single,foundation, eyeshadow,primer,lipstick} from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class HeroserviceService {

  constructor() { }
  giveData()
  {
    return single
  }

  givePayment()
  {
    return payment
  }
  givefoundation()
  {
    return foundation
  }
  giveeyeshadow()
  {
    return eyeshadow
  }
  giveprimer()
  {
    return primer
  }
  givelipstick()
  {
    return lipstick
  }
}
