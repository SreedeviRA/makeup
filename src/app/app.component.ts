import { Component } from '@angular/core';
import { single } from 'src/assets/data';
import { Router } from '@angular/router';
import { SingleComponent } from './pages/single/single.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'happysmiles';
}
