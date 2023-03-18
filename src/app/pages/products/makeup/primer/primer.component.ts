import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroserviceService } from 'src/app/heroservice.service';

@Component({
  selector: 'app-primer',
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.css']
})
export class PrimerComponent {
  constructor(private router:Router, private hero: HeroserviceService) {}
    primer=this.hero.giveData();

  gotoHere(id:any){
    localStorage.setItem('id',id);
    this.router.navigate(['/primer/' +id]);
  }
  }



