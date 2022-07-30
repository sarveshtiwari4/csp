import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../contract/advertisement';
import { Master } from '../contract/master';
import { Result } from '../contract/result';
import { Notification } from '../contract/notification';
import { ResultDisplay } from '../contract/result-display';
import { HomeService } from '../services/home.service';
import { Modelanswer } from '../contract/modelanswer';
import { Onlineapplication } from '../contract/onlineapplication';


@Component({
  selector: 'app-examdetails',
  templateUrl: './examdetails.component.html',
  styleUrls: ['./examdetails.component.css']
})
export class ExamdetailsComponent implements OnInit {

master: Array<Master> = new Array();
master_latest: Array<Master> = new Array();
advertisement: Array<Advertisement> = new Array();
onlineapplication: Array<Onlineapplication> = new Array();
notification: Array<Notification> = new Array();
modelanswer: Array<Modelanswer> = new Array();
result: Array<Result> = new Array();
result_display: Array<ResultDisplay> = new Array();

latestresult:Array<Result>=new Array();

  constructor( private masterservice :HomeService, 
    private modelanswerservice :HomeService ,
    private onlineapplicationservice :HomeService ,
    private notificationservice :HomeService ,
    private advtservice: HomeService, 
    private resultservice :HomeService,
    private latestresservice:HomeService
    ) { }

 // result_display:any=[];
  result_disp1:any={};//object declare
  
  i:number =0;

  async ngOnInit() {

    this.latestresservice.getlatestresult().subscribe(result => {this.latestresult =result;});
     // console.log (this.result);
    

    this.masterservice.getmasterdata().subscribe(mast=>{ this.master =mast;
     // console.log(this.advertisement);
     
    });

    this.masterservice.getmasterdata_all().subscribe(mast=>{ this.master_latest =mast;
      // console.log(this.advertisement);
      
     });

    this.onlineapplicationservice.getonlineapplicationdata().subscribe(oa=>{ this.onlineapplication =oa;
      // console.log(this.advertisement);
      
     });

    this.modelanswerservice.getmodelanswerdata().subscribe(ma=>{ this.modelanswer =ma;
      // console.log(this.advertisement);
      
     });


    this.notificationservice.getnotificationdata().subscribe(noti=>{ this.notification =noti;
      // console.log(this.advertisement);
      
     });
 

    await this.advtservice.getadvt().subscribe( adv=>{  this.advertisement =adv;
      console.log(this.advertisement);
      
    });
 
  
    this.resultservice.getresult().subscribe(result => {this.result=result;
      console.log(this.result);

   

      for( var j=0; j< this.master.length; j++){
      
        this.result_disp1.advt_no=this.master[j].advt_no;
        this.result_disp1.advt_details=this.master[j].details;
        this.result_disp1.latest=this.master_latest.filter(x => x.advt_no==this.master[j].advt_no);
        this.result_disp1.advertisement=this.advertisement.filter(x => x.advt_no==this.master[j].advt_no);
        this.result_disp1.notification=this.notification.filter(x => x.advt_no==this.master[j].advt_no);
        this.result_disp1.onlineapplication=this.onlineapplication.filter(x => x.advt_no==this.master[j].advt_no);
        this.result_disp1.modelanswer=this.modelanswer.filter(x => x.advt_no==this.master[j].advt_no);
        this.result_disp1.result=this.result.filter(x => x.advt_no==this.master[j].advt_no);
        this.result_display.push(this.result_disp1);
        this.result_disp1={};
  
        }
    });
      
    
     
  }
  /////////////////////////////Accordion//////////////////////////////////

  id:any='';
  list:any;

  accordion(ids:any){
   if (ids=='all_post') 
   this.tabchange('Advertisement')
  
   else
   {

    this.tabchange('Latest')
   }
    if(this.id==ids){
      this.id=''
    }
    else
    {
      this.id=ids;
    }
    console.log (this.id);
    
    }

    

/////////////////////////////////TAB//////////////////////////////////////////

id1:any='Advertisement';

tabchange(ids:any){
  this.id1=ids;
  console.log(ids);
}

//////////////////////////////////////////////////////////////////////////////

}
