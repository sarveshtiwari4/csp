import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeService } from './services/home.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './services/http-error-handler.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RtiComponent } from './rti/rti.component';
import { ExamdetailsComponent } from './examdetails/examdetails.component';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { UniquePipe } from './unique.pipe';
import { DirectoryComponent } from './directory/directory.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminpannelComponent } from './adminpannel/adminpannel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './shared/message/message.component';
import { MessageService } from './services/message.service';
import { AuthService } from './services/authservice.service';
import { OrderByPipe } from './order-by.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    RtiComponent,
    ExamdetailsComponent,
    UniquePipe,
    DirectoryComponent,
    ContactusComponent,
    AdminpannelComponent,
    SignupComponent,
    LoginComponent,
    MessageComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [HomeService,MessageService,AuthService,
 HttpErrorHandler,AccordionModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
