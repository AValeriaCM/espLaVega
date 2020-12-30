import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

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
    nombre: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(35), Validators.pattern(this.nombrePattern)]),
    apellido: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(35), Validators.pattern(this.nombrePattern)]),
    direccion: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(80), Validators.pattern(this.direccionPattern)]),
    email: new FormControl('',
      [Validators.required, Validators.minLength(7), Validators.maxLength(70), Validators.pattern(this.emailPattern)]),
    contrasena: new FormControl('',
      [Validators.required, Validators.minLength(8), Validators.maxLength(12), Validators.pattern(this.contrasenaPattern)]),
    confirmacion_contrasena: new FormControl('', [Validators.required]),
    telefono: new FormControl('',
      [Validators.required, Validators.pattern(this.telefonoPatten)]),
    fechaNac: new FormControl('',
      [Validators.required ]),
  },
    { validators: this.matchingPasswords('contrasena', 'confirmacion_contrasena') });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public submit(){
    console.log(this.registrationForm.value)
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
    nombre:[
      { type: 'required', message: 'Nombre es requerido' },
      { type: 'maxlength', message: 'El nombre no es valido' },
      { type: 'minlength', message: 'El nombre no es valido' }
    ],
    apellido:[
      { type: 'required', message: 'Apellido es requerido' },
      { type: 'maxlength', message: 'El apellido no es valido' },
      { type: 'minlength', message: 'El apellido no es valido' }
    ],
    direccion:[
      { type: 'required', message: 'Direccion es requerido' },
      { type: 'maxlength', message: 'La direccion no es valida' },
      { type: 'minlength', message: 'La direccion no es valida' }
    ],
    email:[
      { type: 'required', message: 'Email es requerido' },
      { type: 'maxlength', message: 'El email no es valido' },
      { type: 'minlength', message: 'El email no es valido' }
    ],
    contrasena:[
      { type: 'required', message: 'Contrasena es requerido' },
      { type: 'maxlength', message: 'La contrasena no es valida' },
      { type: 'minlength', message: 'La contrasena no es valida' }
    ],
    confirmacion_contrasena:[
      { type: 'required', message: 'Confirmacion es requerido' }
    ],
    telefono:[
      { type: 'required', message: 'Telefono es requerido' },
      { type: 'maxlength', message: 'El telefono no es valido' },
      { type: 'minlength', message: 'El telefono no es valido' }
    ],
    fechaNac:[
      { type: 'required', message: 'Fecha de Nacimiento es requerido' }
    ]
  };

  get nombre(){
    return this.registrationForm.get('nombre');
  }
  get apellido(){
    return this.registrationForm.get('apellido');
  }
  get direccion(){
    return this.registrationForm.get('direccion');
  }
  get email(){
    return this.registrationForm.get('email');
  }
  get contrasena(){
    return this.registrationForm.get('contrasena');
  }
  get confirmacion_contrasena(){
    return this.registrationForm.get('confirmacion_contrasena');
  }
  get telefono(){
    return this.registrationForm.get('telefono');
  }
  get fechaNac(){
    return this.registrationForm.get('fechaNac');
  }
}
