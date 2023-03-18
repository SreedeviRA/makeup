import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  email:string=''
  pass:string=''
  user:string=''
  
  constructor(private auth:AuthService) {
  }
 
  signup()
  {
    if(this.email == ''){
      alert('please enter email')
       return;
    }
    if(this.pass == ''){
      alert('please enter password')
       return;
    }
    this.auth.signup(this.email,this.pass)
    this.email=''
    this.pass=''
    this.user=''
  }
  }