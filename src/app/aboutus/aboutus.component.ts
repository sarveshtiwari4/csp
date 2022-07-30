import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

result:any;

  constructor( private home :HomeService) { }

  ngOnInit(): void {
  
  this.home.getresult()
  .subscribe(result => {
    this.result =result;
    console.log (this.result);
  });
}
}
