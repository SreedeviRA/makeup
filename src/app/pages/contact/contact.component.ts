import { Component } from '@angular/core';
import { HeroserviceService } from 'src/app/heroservice.service';
import { Router } from '@angular/router';
import { Firestore,collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private router: Router,
    private hero:HeroserviceService,private firestore: Firestore) {}
  
    submit(){
      alert('submitted succesfully')
      this.router.navigate(['home'])
    }
    addData(f:any)
    {
      const collectionInstance = collection(this.firestore,'connect');
      addDoc(collectionInstance,f.value).then(() =>{
        console.log(" Data Saved Succesfully")
      } )
      .catch((err)=>{
        console.log(err);
      })
    }

}
