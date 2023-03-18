import { Component } from '@angular/core';
import { HeroserviceService } from 'src/app/heroservice.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private router:Router,private hero:HeroserviceService){}
  makeup=this.hero.giveData();
  gotohere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/single']);
  }
}
