import { Pqr } from './../../Models/Pqr';
import { Router } from '@angular/router';
import { PqrService } from './../../_services/pqr.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  nombrePattern: any = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
  emailPattern: any = /^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/;

  pqrForm = this.formBuilder.group({
    name: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(35), Validators.pattern(this.nombrePattern)]),
    lastname: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(35), Validators.pattern(this.nombrePattern)]),
    email: new FormControl('',
      [Validators.required, Validators.minLength(7), Validators.maxLength(70), Validators.pattern(this.emailPattern)]),
    message: new FormControl('', [Validators.required])
  });

  constructor(private formBuilder: FormBuilder,
    private pqrService: PqrService,
    private router: Router) { }

    public sendPqr(){
      let pqr = new Pqr();
      pqr.name = this.pqrForm.value['name'];
      pqr.lastname = this.pqrForm.value['lastname'];
      pqr.email = this.pqrForm.value['email'];
      pqr.message = this.pqrForm.value['message'];

      this.pqrService.pqr(pqr).subscribe(() =>{
        console.log(pqr);
        this.pqrForm.reset();
      })
    }

  ngOnInit() {
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
    email:[
      { type: 'required', message: 'Email es requerido' },
      { type: 'maxlength', message: 'El email no es valido' },
      { type: 'minlength', message: 'El email no es valido' }
    ],
    message:[
      { type: 'required', message: 'El mensaje es requerido' }
    ]
  }

  get name(){
    return this.pqrForm.get('name');
  }
  get lastname(){
    return this.pqrForm.get('lastname');
  }
  get email(){
    return this.pqrForm.get('email');
  }
  get message(){
    return this.pqrForm.get('message');
  }
}
