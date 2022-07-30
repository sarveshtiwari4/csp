import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../contract/advertisement';
import { Result } from '../contract/result';
import { WhatsNew } from '../contract/whats-new';
import { HomeService } from '../services/home.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  whats_new:Array<WhatsNew>=new Array();
  result:Array<Result>=new Array();

  constructor( private home:HomeService) { }

  ngOnInit(): void {

    this.home.gethomes()
    .subscribe(home => {
      this.whats_new=home;
    // console.log (this.whats_new);
    });

    this.home.getlatestresult()
    .subscribe(result => {
      this.result =result;
     // console.log (this.result);
    });



  }

}
