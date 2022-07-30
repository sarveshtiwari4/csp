import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goAboutus(){

  this.router.navigate(['/aboutus']);
 
  }
  fontSize = 24;
  IncrFontSize() {
   this.fontSize++;
  }
  DecreFontSize() {
   this.fontSize--;
  }


}
