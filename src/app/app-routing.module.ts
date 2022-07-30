import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminpannelComponent } from './adminpannel/adminpannel.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DirectoryComponent } from './directory/directory.component';
import { ExamdetailsComponent } from './examdetails/examdetails.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RtiComponent } from './rti/rti.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth/auth.guard';



const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'aboutus', component: AboutusComponent },
  {path :'rti', component:RtiComponent},
  {path :'examdetails', component:ExamdetailsComponent},
  {path :'directory', component:DirectoryComponent},
  {path :'contactus', component:ContactusComponent},
  {path :'login', component:LoginComponent},
  {path :'adminpannel', component:AdminpannelComponent,canActivate: [AuthGuard]},
  {path :'signup', component:SignupComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],


})
export class AppRoutingModule { }
