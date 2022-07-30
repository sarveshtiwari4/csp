import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
import { Advertisement } from '../contract/advertisement';
import { WhatsNew } from '../contract/whats-new';
import { Master } from '../contract/master';
import { HomeService } from '../services/home.service';
import { Onlineapplication } from '../contract/onlineapplication';
import { Modelanswer } from '../contract/modelanswer';
import { Notification } from '../contract/notification';
import { Result } from '../contract/result';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpannel',
  templateUrl: './adminpannel.component.html',
  styleUrls: ['./adminpannel.component.css']
})
export class AdminpannelComponent implements OnInit {
 table_display:boolean=false;
 frm_master:any;
 link_value:any;
 frm_other:any;
 frm_edit_record:any;
 frm_edit:any
 disp: any;
 uid:any;
 search_value:any={};
 IsSubmitted = false;

 master: Array<Master> = new Array();
 master_display:Array<Master>=new Array();

 advertisement:Array<Advertisement>=new Array();
 advt_display:Array<Advertisement>=new Array();

 home:Array<WhatsNew>=new Array();
 home_display:Array<WhatsNew>=new Array();

 oa:Array<Onlineapplication>=new Array();
 oa_display:Array<Onlineapplication>=new Array();

 ma:Array<Modelanswer>=new Array();
 ma_display:Array<Modelanswer>=new Array();
 
 noti:Array<Notification>=new Array();
 noti_display:Array<Notification>=new Array();

 res:Array<Result>=new Array();
 res_display:Array<Result>=new Array();

 latest_res:Array<Result>=new Array();
 latest_res_display:Array<Result>=new Array();

constructor(
  private router: Router,
  private masterservice: HomeService, 
  private mast_dataservice:HomeService,
  private advtservice:HomeService,
  private homeservice:HomeService,
  private oaservice:HomeService,
  private maservice:HomeService,
  private notiservice:HomeService,
  private resultservice:HomeService,
  private latestresultservice:HomeService
  
   ) {}

  ngOnInit():void {
   
    this.uid=new Date().getTime().toString();
    this.createForm();
    this.createForm2();
    this.createForm3();
    this.createForm4();

    //console.log(this.uid);

    this.mast_dataservice.getmasterdata().subscribe(mast=>{ this.master =mast;});
            
    this.advtservice.getadvt().subscribe(adv=> {this.advertisement =adv});

    this.homeservice.gethomes().subscribe(h=> {this.home=h});

    this.oaservice.getonlineapplicationdata().subscribe(oa=> {this.oa=oa});

    this.maservice.getmodelanswerdata().subscribe(ma=> {this.ma=ma});
  
    this.notiservice.getnotificationdata().subscribe(noti=> {this.noti=noti});

    this.resultservice.getresult().subscribe(res=> {this.res=res});

    this.latestresultservice.getlatestresult().subscribe(lat_res=> {this.latest_res=lat_res});
  }


createForm(){
this.frm_master= new FormGroup({
  txtitemcode:new FormControl(this.uid),
  txtadvtno:new FormControl('',[Validators.required, Validators.minLength(6), Validators.pattern("[0-9]*$")]),
  txtadvtdetails:new FormControl('',Validators.required),
  txtpublished:new FormControl('',Validators.required)

})

}
      get item_code() { return this.frm_master.get('txtitemcode'); }
      get advtno() { return this.frm_master.get('txtadvtno'); }
      get advtdetails() { return this.frm_master.get('txtadvtdetails'); }
      get published() { return this.frm_master.get('txtpublished'); }


onSubmit(){
 
    this.masterservice.postmasterdata(this.frm_master.value).subscribe();
    this.IsSubmitted= false;
    alert("This form has been submitted");
    this.frm_master.reset();
    location.reload();
  }
  
  


createForm2(){
     
      this.frm_other= new FormGroup({
       txttablename:new FormControl('',Validators.required), 
       txtadvtno2:new FormControl(''),
       txtitemcode:new FormControl(this.uid),
       txtdetails:new FormControl('',Validators.required),
       txtlink:new FormControl('',Validators.required),
       txtpublished2:new FormControl('',Validators.required),
     })
     
     }
     
    get tablename() { return this.frm_other.get('txttablename'); }
    get advtno2() { return this.frm_other.get('txtadvtno2'); }
    get itemcode() { return this.frm_other.get('txtitemcode'); }
    get details() { return this.frm_other.get('txtdetails'); }
    get link() { return this.frm_other.get('txtlink'); }
    get published2() { return this.frm_other.get('txtpublished2'); }

tableselected:any;

OntableNameclick(event:any){
      
        let selectedOptions = event.target['options'];
        let selectedIndex = selectedOptions.selectedIndex;
        let selectElementText = selectedOptions[selectedIndex].value;
        this.tableselected=selectElementText;
      
        this.link_value="/assets/pdf/" + this.tableselected +'/';
        

    }

onSubmit2(){  
      if (this.tableselected=='advertisement'){

        this.advtservice.postadvertisementdata(this.frm_other.value).subscribe();
        this.IsSubmitted= false;
        alert("Advertisement : one Record Saved..");
        this.frm_other.reset();
        location.reload();
       }


       if (this.tableselected=='home'){

        this.advtservice.posthomedata(this.frm_other.value).subscribe();
        this.IsSubmitted= false;
        alert("WhatsNew : one Record Saved..");
        this.frm_other.reset();
        location.reload();
       }

       if (this.tableselected=='onlineapplication'){

        this.oaservice.postoadata(this.frm_other.value).subscribe();
        this.IsSubmitted= false;
        alert("Online Application : one Record Saved..");
        this.frm_other.reset();
        location.reload();
       }


       if (this.tableselected=='modelanswer'){

        this.maservice.postmadata(this.frm_other.value).subscribe();
        this.IsSubmitted= false;
        alert("Modal Answer : one Record Saved..");
        this.frm_other.reset();
        location.reload();
       }

       if (this.tableselected=='notification'){

        this.notiservice.postnotidata(this.frm_other.value).subscribe();
        this.IsSubmitted= false;
        alert("Notification : one Record Saved..");
        this.frm_other.reset();
        location.reload();
       }

       if (this.tableselected=='result'){

        this.resultservice.postresdata(this.frm_other.value).subscribe();
        this.IsSubmitted= false;
        alert("Result: one Record Saved..");
        this.frm_other.reset();
        location.reload();
       }

       if (this.tableselected=='latest_result'){

        this.latestresultservice.postlatest_resdata(this.frm_other.value).subscribe();
        this.IsSubmitted= false;
        alert("Latest Result: one Record Saved..");
        this.frm_other.reset();
        location.reload();
       }
    } 

createForm3(){
    this.frm_edit= new FormGroup({

      txttablename_edit:new FormControl('',[Validators.required]),
      txtadvtno_edit:new FormControl('',[Validators.required, Validators.minLength(6), Validators.pattern("[0-9]*$")]),
      
    })
    
    }
    
    get advtno_edit() { return this.frm_edit.get('txtadvtno_edit'); }
    get table_name_edit() { return this.frm_edit.get('txttablename_edit'); }


createForm4(){
     
          this.frm_edit_record= new FormGroup({
              txttablename:new FormControl('',Validators.required), 
              txtadvtno2:new FormControl('',Validators.required),
              txtitemcode:new FormControl('',Validators.required),
              txtdetails:new FormControl('',Validators.required),
              txtlink:new FormControl('',Validators.required),
              txtpublished2:new FormControl('',Validators.required),
              })
     
     }

            get tablename_edit() { return this.frm_edit_record.get('txttablename'); }
            get advtno2_edit() { return this.frm_edit_record.get('txtadvtno2'); }
            get itemcode_edit() { return this.frm_edit_record.get('txtitemcode'); }
            get details_edit() { return this.frm_edit_record.get('txtdetails'); }
            get link_edit() { return this.frm_edit_record.get('txtlink'); }
            get published2_edit() { return this.frm_edit_record.get('txtpublished2'); }
  
  tableselected2:any;

  OntableNameclick_edit($event:any){

    let selectedOptions = $event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;
    let selectElementText = selectedOptions[selectedIndex].value;
    this.tableselected2=selectElementText;
  }



searchOnclick(searchvalue:any){

        this.table_display=true;
      
        this.table_name=this.tableselected2;
        
        if(this.table_name=='master') {
        
          this.master_display=(this.master.filter(x=>x.advt_no==searchvalue));
          this.advt_display=this.master_display;

          console.log(this.table_name);
        }


        if(this.table_name=='advertisement') {
         
          this.advt_display=(this.advertisement.filter(x=>x.advt_no==searchvalue));
          console.log(this.table_name);
        }
   
        

        if(this.table_name=='home'){
         
          this.home_display=(this.home.filter(x=>x.advt_no==searchvalue));

          this.advt_display=this.home_display;

          console.log(this.home_display);
        } 

        if(this.table_name=='onlineapplication'){
         
          this.oa_display=(this.oa.filter(x=>x.advt_no==searchvalue));

          this.advt_display=this.oa_display;

          console.log(this.oa_display);
        } 

        if(this.table_name=='modelanswer'){
         
          this.ma_display=(this.ma.filter(x=>x.advt_no==searchvalue));

          this.advt_display=this.ma_display;

          console.log(this.ma_display);
        } 


        if(this.table_name=='notification'){
         
          this.noti_display=(this.noti.filter(x=>x.advt_no==searchvalue));

          this.advt_display=this.noti_display;

          console.log(this.noti_display);
        } 

        if(this.table_name=='result'){
         
          this.res_display=(this.res.filter(x=>x.advt_no==searchvalue));

          this.advt_display=this.res_display;

          console.log(this.res_display);
        } 

        
        if(this.table_name=='latest_result'){
         
          this.latest_res_display=(this.latest_res.filter(x=>x.advt_no==searchvalue));

          this.advt_display=this.latest_res_display;

          console.log(this.latest_res_display);
        } 



    }    


advt_record_display:any={};
table_name:any="";

editOnclick(index:any){
  
      this.table_name=this.tableselected2;
      
      if(this.table_name=='master') {
        this.advt_record_display=this.advt_display[index];
  
        this.frm_edit_record.controls["txttablename"].setValue(this.table_name);
        this.frm_edit_record.controls["txtadvtno2"].setValue(this.advt_record_display.advt_no);
        this.frm_edit_record.controls["txtitemcode"].setValue(this.advt_record_display.item_code);
        this.frm_edit_record.controls["txtdetails"].setValue(this.advt_record_display.details);
        this.frm_edit_record.controls["txtlink"].setValue("link");
        this.frm_edit_record.controls["txtpublished2"].setValue(this.advt_record_display.published);
        }

      if(this.table_name=='advertisement') {
      this.advt_record_display=this.advt_display[index];

      this.frm_edit_record.controls["txttablename"].setValue(this.table_name);
      this.frm_edit_record.controls["txtadvtno2"].setValue(this.advt_record_display.advt_no);
      this.frm_edit_record.controls["txtitemcode"].setValue(this.advt_record_display.item_code);
      this.frm_edit_record.controls["txtdetails"].setValue(this.advt_record_display.details);
      this.frm_edit_record.controls["txtlink"].setValue(this.advt_record_display.link);
      this.frm_edit_record.controls["txtpublished2"].setValue(this.advt_record_display.published);
      }

      if(this.table_name=='home') {
        this.advt_record_display=this.home_display[index];
        
        this.frm_edit_record.controls["txttablename"].setValue(this.table_name);
        this.frm_edit_record.controls["txtadvtno2"].setValue(this.advt_record_display.advt_no);
        this.frm_edit_record.controls["txtitemcode"].setValue(this.advt_record_display.item_code);
        this.frm_edit_record.controls["txtdetails"].setValue(this.advt_record_display.details);
        this.frm_edit_record.controls["txtlink"].setValue(this.advt_record_display.link);
        this.frm_edit_record.controls["txtpublished2"].setValue(this.advt_record_display.published);
        }


        if(this.table_name=='onlineapplication') {
          this.advt_record_display=this.oa_display[index];
          
          this.frm_edit_record.controls["txttablename"].setValue(this.table_name);
          this.frm_edit_record.controls["txtadvtno2"].setValue(this.advt_record_display.advt_no);
          this.frm_edit_record.controls["txtitemcode"].setValue(this.advt_record_display.item_code);
          this.frm_edit_record.controls["txtdetails"].setValue(this.advt_record_display.details);
          this.frm_edit_record.controls["txtlink"].setValue(this.advt_record_display.link);
          this.frm_edit_record.controls["txtpublished2"].setValue(this.advt_record_display.published);
          }

          if(this.table_name=='modelanswer') {
            this.advt_record_display=this.ma_display[index];
            
            this.frm_edit_record.controls["txttablename"].setValue(this.table_name);
            this.frm_edit_record.controls["txtadvtno2"].setValue(this.advt_record_display.advt_no);
            this.frm_edit_record.controls["txtitemcode"].setValue(this.advt_record_display.item_code);
            this.frm_edit_record.controls["txtdetails"].setValue(this.advt_record_display.details);
            this.frm_edit_record.controls["txtlink"].setValue(this.advt_record_display.link);
            this.frm_edit_record.controls["txtpublished2"].setValue(this.advt_record_display.published);
            }


            if(this.table_name=='notification') {
              this.advt_record_display=this.noti_display[index];
              
              this.frm_edit_record.controls["txttablename"].setValue(this.table_name);
              this.frm_edit_record.controls["txtadvtno2"].setValue(this.advt_record_display.advt_no);
              this.frm_edit_record.controls["txtitemcode"].setValue(this.advt_record_display.item_code);
              this.frm_edit_record.controls["txtdetails"].setValue(this.advt_record_display.details);
              this.frm_edit_record.controls["txtlink"].setValue(this.advt_record_display.link);
              this.frm_edit_record.controls["txtpublished2"].setValue(this.advt_record_display.published);
              }


              if(this.table_name=='result') {
                this.advt_record_display=this.res_display[index];
                
                this.frm_edit_record.controls["txttablename"].setValue(this.table_name);
                this.frm_edit_record.controls["txtadvtno2"].setValue(this.advt_record_display.advt_no);
                this.frm_edit_record.controls["txtitemcode"].setValue(this.advt_record_display.item_code);
                this.frm_edit_record.controls["txtdetails"].setValue(this.advt_record_display.details);
                this.frm_edit_record.controls["txtlink"].setValue(this.advt_record_display.link);
                this.frm_edit_record.controls["txtpublished2"].setValue(this.advt_record_display.published);
                }

                if(this.table_name=='latest_result') {
                  this.advt_record_display=this.latest_res_display[index];
                  
                  this.frm_edit_record.controls["txttablename"].setValue(this.table_name);
                  this.frm_edit_record.controls["txtadvtno2"].setValue(this.advt_record_display.advt_no);
                  this.frm_edit_record.controls["txtitemcode"].setValue(this.advt_record_display.item_code);
                  this.frm_edit_record.controls["txtdetails"].setValue(this.advt_record_display.details);
                  this.frm_edit_record.controls["txtlink"].setValue(this.advt_record_display.link);
                  this.frm_edit_record.controls["txtpublished2"].setValue(this.advt_record_display.published);
                  }
          
        
      
    
  }

edit_record_save(){

  if (this.table_name=='master'){
    this.masterservice.edit_master(this.advt_record_display.item_code,this.frm_edit_record.value).subscribe();
     this.IsSubmitted= false;
     alert("Data Updated..");
    this.frm_edit_record.reset();
   }

      if (this.table_name=='advertisement'){
       this.advtservice.edit_advertisement(this.advt_record_display.item_code,this.frm_edit_record.value).subscribe();
        this.IsSubmitted= false;
        alert("Data Updated..");
       this.frm_edit_record.reset();
      }

      if (this.table_name=='home'){
        this.advtservice.edit_whatsNew(this.advt_record_display.item_code,this.frm_edit_record.value).subscribe();
         this.IsSubmitted= false;
         alert("Data Updated..");
        this.frm_edit_record.reset();
       }
 
       if (this.table_name=='onlineapplication'){
        this.oaservice.edit_oa(this.advt_record_display.item_code,this.frm_edit_record.value).subscribe();
         this.IsSubmitted= false;
         alert("Data Updated..");
        this.frm_edit_record.reset();
       }


       if (this.table_name=='modelanswer'){
        this.maservice.edit_ma(this.advt_record_display.item_code,this.frm_edit_record.value).subscribe();
         this.IsSubmitted= false;
         alert("Data Updated..");
        this.frm_edit_record.reset();
       }

       if (this.table_name=='notification'){
        this.notiservice.edit_noti(this.advt_record_display.item_code,this.frm_edit_record.value).subscribe();
         this.IsSubmitted= false;
         alert("Data Updated..");
        this.frm_edit_record.reset();
       }
     

      if (this.table_name=='result'){
        this.resultservice.edit_result(this.advt_record_display.item_code,this.frm_edit_record.value).subscribe();
         this.IsSubmitted= false;
         alert("Data Updated..");
        this.frm_edit_record.reset();
       }

       if (this.table_name=='latest_result'){
        this.latestresultservice.edit_latest_result(this.advt_record_display.item_code,this.frm_edit_record.value).subscribe();
         this.IsSubmitted= false;
         alert("Data Updated..");
        this.frm_edit_record.reset();
       }




      location.reload();
    }
    
    logout(){
      localStorage.removeItem('currentUser');
      this.router.navigateByUrl('/login');
    }
}
