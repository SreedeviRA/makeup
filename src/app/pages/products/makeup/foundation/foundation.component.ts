import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroserviceService } from 'src/app/heroservice.service';

@Component({
  selector: 'app-foundation',
  templateUrl: './foundation.component.html',
  styleUrls: ['./foundation.component.css']
})
export class FoundationComponent {
  constructor(private router:Router, private hero: HeroserviceService) {}
    foundation=this.hero.giveData();

  gotoHere(id:any){
    localStorage.setItem('id',id);
    this.router.navigate(['/foundation/']);
  }
  }



