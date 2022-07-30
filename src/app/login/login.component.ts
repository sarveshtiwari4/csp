import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/authservice.service';
//import { MessageService } from '../services/message.service';

import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  title: any ;

  constructor(
   
    private router: Router,
    private authService: AuthService,
    private messageService:MessageService
  ) {
   //if (this.authService.isLoggedIn()) {
     //this.router.navigateByUrl('/adminpannel');
    //}
  }

  ngOnInit() {
  
    this.title = 'Administrator Login';
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl ('', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]),
      password: new FormControl ('', [Validators.required, Validators.minLength(6)]),
    })
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    this.authService.login({
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    }).subscribe(result => {
        if (result) {
         this.messageService.clear();
          this.router.navigateByUrl('/adminpannel');
        }
        else{
        alert("Incorrect Credentials...")
        }
        
      }
    )
  }



}

