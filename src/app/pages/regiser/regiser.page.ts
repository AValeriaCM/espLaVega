import { AutenticationService } from './../../_services/autentication.service';
import { UserService } from './../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/Models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regiser',
  templateUrl: './regiser.page.html',
  styleUrls: ['./regiser.page.scss'],
})
export class RegiserPage implements OnInit {

  // ----------Pattern-----------

  emailPattern: any = /^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/;
  nombrePattern: any = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
  contrasenaPattern: any = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  direccionPattern: any = /^[#.0-9a-zA-Z\s,-]+$/;
  telefonoPatten: any = /^[ +0-9 +]+$/;

  registrationForm = this.formBuilder.group({
    name: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(35), Validators.pattern(this.nombrePattern)]),
    lastname: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(35), Validators.pattern(this.nombrePattern)]),
    address: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(80), Validators.pattern(this.direccionPattern)]),
    email: new FormControl('',
      [Validators.required, Validators.minLength(7), Validators.maxLength(70), Validators.pattern(this.emailPattern)]),
    password: new FormControl('',
      [Validators.required, Validators.minLength(8), Validators.maxLength(12), Validators.pattern(this.contrasenaPattern)]),
    password_confirmation: new FormControl('', [Validators.required]),
    phone: new FormControl('',
      [Validators.required, Validators.pattern(this.telefonoPatten)]),
    code: new FormControl('', [Validators.required, Validators.minLength(7)])
  },
    { validators: this.matchingPasswords('password', 'password_confirmation') });

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UserService,
    private router: Router,
    private loginService: AutenticationService
  ) { }

  public submit(){
    let user = new User();
    user.name = this.registrationForm.value['name'];
    user.lastname = this.registrationForm.value['lastname'];
    user.address = this.registrationForm.value['address'];
    user.password = this.registrationForm.value['password'];
    user.password_confirmation = this.registrationForm.value['password_confirmation'];
    user.email = this.registrationForm.value['email'];
    user.phone = this.registrationForm.value['phone'];
    user.code = this.registrationForm.value['code'];
    
    this.usuarioService.register(user).subscribe(data => {
      //this.loginService.setToken(data.token);
      this.registrationForm.reset();
      this.router.navigateByUrl('/login');
    },
      error => {
        console.log(error);
      }
    );
    
  }
  ngOnInit() {
  }

  matchingPasswords(password: string, passwordconfirmation: string) {
    return (group: FormGroup): { [key: string]: any } => {
      const passwordT = group.controls[password];
      const confirmPassword = group.controls[passwordconfirmation];

      if (passwordT.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    };
  }

  public errorMessages = {
    name:[
      { type: 'required', message: 'Nombre es requerido' },
      { type: 'maxlength', message: 'El nombre no es valido' },
      { type: 'minlength', message: 'El nombre no es valido' }
    ],
    lastname:[
      { type: 'required', message: 'Apellido es requerido' },
      { type: 'maxlength', message: 'El apellido no es valido' },
      { type: 'minlength', message: 'El apellido no es valido' }
    ],
    address:[
      { type: 'required', message: 'Direccion es requerido' },
      { type: 'maxlength', message: 'La direccion no es valida' },
      { type: 'minlength', message: 'La direccion no es valida' }
    ],
    email:[
      { type: 'required', message: 'Email es requerido' },
      { type: 'maxlength', message: 'El email no es valido' },
      { type: 'minlength', message: 'El email no es valido' }
    ],
    password:[
      { type: 'required', message: 'Contrasena es requerido' },
      { type: 'maxlength', message: 'La contrasena no es valida' },
      { type: 'minlength', message: 'La contrasena no es valida' }
    ],
    password_confirmation:[
      { type: 'required', message: 'Confirmacion es requerido' }
    ],
    phone:[
      { type: 'required', message: 'Telefono es requerido' },
      { type: 'maxlength', message: 'El telefono no es valido' },
      { type: 'minlength', message: 'El telefono no es valido' }
    ],
    code:[
      { type: 'required', message: 'Codigo es requerido' },
      { type: 'minlength', message: 'El codigo no es valido' }
    ]
  };

  get name(){
    return this.registrationForm.get('name');
  }
  get lastname(){
    return this.registrationForm.get('lastname');
  }
  get address(){
    return this.registrationForm.get('address');
  }
  get email(){
    return this.registrationForm.get('email');
  }
  get password(){
    return this.registrationForm.get('password');
  }
  get password_confirmation(){
    return this.registrationForm.get('password_confirmation');
  }
  get phone(){
    return this.registrationForm.get('phone');
  }
  get code(){
    return this.registrationForm.get('code');
  }
}
