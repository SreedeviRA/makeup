import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroserviceService } from 'src/app/heroservice.service';

@Component({
  selector: 'app-lipstick',
  templateUrl: './lipstick.component.html',
  styleUrls: ['./lipstick.component.css']
})
export class LipstickComponent {
  constructor(private router:Router, private hero: HeroserviceService) {}
    lipstick=this.hero.giveData();

  gotoHere(id:any){
    localStorage.setItem('id',id);
    this.router.navigate(['/lipstick/']);
  }
  }



