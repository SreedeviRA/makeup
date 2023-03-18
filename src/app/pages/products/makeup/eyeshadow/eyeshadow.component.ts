import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroserviceService } from 'src/app/heroservice.service';

@Component({
  selector: 'app-eyeshadow',
  templateUrl: './eyeshadow.component.html',
  styleUrls: ['./eyeshadow.component.css']
})
export class EyeshadowComponent {
  constructor(private router:Router, private hero: HeroserviceService) {}
    eyeshadow=this.hero.giveData();

  gotoHere(id:any){
    localStorage.setItem('id',id);
    this.router.navigate(['/eyeshadow/']);
  }
  }



