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

  /*Patrones de validacion*/
  emailPattern: any = /^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/;
  contrasenaPattern: any = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  loginForm = this.formBuilder.group({
    email: new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
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
   this.loginService.login(user).subscribe( data => {
     this.loginService.setToken(data.token);
     this.router.navigateByUrl('/home');
   },
   error => {
     console.log(error);
   }   
   );

 }

 public errorMessages = {
  email:[
    { type: 'required', message: 'Email es requerido' },
    { type: 'maxlength', message: 'El email no es valido' },
    { type: 'minlength', message: 'El email no es valido' },
    { type: 'pattern', message: 'El email no es valido' }
  ],
  password:[
    { type: 'required', message: 'La contraseña es requerida' },
    { type: 'maxlength', message: 'La contraseña no es valida' },
    { type: 'minlength', message: 'La contraseña no es valida' }
    
  ]}


 get email(){
   return this.loginForm.get('email');
 }

 get password(){
   return this.loginForm.get('password');
 }
}
