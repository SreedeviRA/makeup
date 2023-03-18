import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth} from '@angular/fire/compat/auth'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  constructor(private fireauth:AngularFireAuth,private router:Router) {}
  
//signUp method()
signup(email:string,pass:string){
  this.fireauth.createUserWithEmailAndPassword(email,pass).then( () => {
   alert("sign up successfully")
   this.router.navigate(['/login'])
 }, err =>{
 
   alert('err.message')
   this.router.navigate(['/signup'])
 })

   }
   //login()
  
login(email:string,pass:string){
  this.fireauth.signInWithEmailAndPassword(email,pass).then( () => {
    localStorage.setItem('token','true')
    this.router.navigate(['/'])
   
 }, err =>{
 
   alert('err.message')
   this.router.navigate(['/signup'])
 })

   }

   

  
  

}





  



