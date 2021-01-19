import { Person } from './../../Models/Person';
import { Router } from '@angular/router';
import { AutenticationService } from './../../_services/autentication.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = this.formBuilder.group({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  });

  constructor(public loginService: AutenticationService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
  }

  
 public login(){
   let user = new Person();
   user.email = this.loginForm.value['email'];
   user.password = this.loginForm.value['password'];
   this.loginService.login(user).subscribe( () =>{
     console.log(user);
     this.loginForm.reset();
     this.router.navigate(['/home']);
   });

 }

 get email(){
   return this.loginForm.get('email');
 }

 get password(){
   return this.loginForm.get('password');
 }
}
