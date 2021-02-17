import { Invoice } from './../../Models/Invoice';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AutenticationService } from './../../_services/autentication.service';
import { User } from './../../Models/User';
import { UserService } from './../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/_services/invoice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  dataSource: any[];

  formPay = this.formBuilder.group({
    code: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required])
  });
  constructor(private userService: UserService,
    private authService: AutenticationService,
    private invoiceService: InvoiceService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getUserLogged();
  }

  getUserLogged() {
    this.authService.getUser().subscribe(user => {
      console.log(user);
    });
  }

  public pay(){
    let doc= new Invoice();
    doc.code = this.formPay.value['code'];
    doc.date = this.formPay.value['date_issue'];

    this.invoiceService.invoice(this.code.value, this.date.value).subscribe(res =>{
      console.log(this.code.value);
      console.log(this.date.value);
      this.dataSource = res.data;
      this.dataSource = Array.of(this.dataSource);
      this.formPay.reset();
    });
  }

  get code(){
    return this.formPay.get('code');
  }

  get date(){
    return this.formPay.get('date');
  }
}
