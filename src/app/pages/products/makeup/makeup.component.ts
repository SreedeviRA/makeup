import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroserviceService } from 'src/app/heroservice.service';

@Component({
  selector: 'app-makeup',
  templateUrl: './makeup.component.html',
  styleUrls: ['./makeup.component.css']
})
export class MakeupComponent {
  constructor(private router:Router,private hero:HeroserviceService){}
  makeup=this.hero.giveData();
  gotohere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/single/']);
  }
  }


