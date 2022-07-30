import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm, ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../contract/user';
import { AuthService } from '../services/authservice.service';
import { passwordMatchValidator } from '../validators/password-match';
//import { checkPasswords } from '../validators/password-match';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: any;
  title:any="CREATE NEW USER";
  uid:any;
 
  //isMessage: boolean;

  constructor(
    
    private router: Router,
    private authService:AuthService
  ) {}

  ngOnInit() {
    this.uid=new Date().getTime().toString();
    this.createForm();
    
  
  }

  createForm() {
    this.signupForm = new FormGroup({
      id: new FormControl (this.uid),
      username: new FormControl ('', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]),
      password: new FormControl ('', [Validators.required, Validators.minLength(6)]),
      passconf: new FormControl ('', Validators. required),
      first_name: new FormControl ('', Validators.required),
      last_name: new FormControl (''),
      email:new FormControl('', [Validators.required, Validators.email])
    },{  validators: passwordMatchValidator })
    
  }

  get id() { return this.signupForm.get('id'); }
  get username() { return this.signupForm.get('username'); }
  get password() { return this.signupForm.get('password'); }
  get passconf() { return this.signupForm.get('passconf'); }
  get email() { return this.signupForm.get('email'); }
  get first_name() { return this.signupForm.get('first_name'); }
  get last_name() { return this.signupForm.get('last_name'); }
  
  




 // get f() { return this.signupForm.controls }

  onSubmit() {
    //this.model = this.signupForm.value;
    this.authService.signup(this.signupForm.value).subscribe(
      result => {

      
        if( result) {
          this.router.navigateByUrl('/login');
        }
      }
    )
  }


 



}