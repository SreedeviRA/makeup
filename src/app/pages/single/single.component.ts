import { Component } from '@angular/core';
import { HeroserviceService } from 'src/app/heroservice.service';
import { Router } from '@angular/router';
import { single } from 'src/assets/data';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  single:any
  constructor(private router:Router, private hero: HeroserviceService) {

    let id = localStorage.getItem('id')
    let nid = Number(id)
    console.log(id);
    if(nid===1){
     this.single= hero.givefoundation()
    }else if(nid===2){
      this.single=hero.giveeyeshadow()
    }else if(nid===3){
      this.single=hero.giveprimer()
    }
    else if(nid===4){
      this.single=hero.givelipstick()
    }
    
  }

  gotoHere(id:any){
    localStorage.setItem('id',id);
    this.router.navigate(['/cart/']);
  }
  }

  
