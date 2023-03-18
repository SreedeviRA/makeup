import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

// import { FireService } from 'src/app/fire.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string=''
  pass:string=''
  user:string=''
  constructor(private auth:AuthService){}

  login()
  {
    if(this.email == ''){
      alert('please enter email')
       return;
    }
    if(this.pass == ''){
      alert('please enter password')
       return;
    }
    this.auth.login(this.email,this.pass)
    this.email=''
    this.pass=''
    this.user=''
  }
}
    