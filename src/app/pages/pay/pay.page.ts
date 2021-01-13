import { Component, OnInit } from '@angular/core';
import { PointService } from 'src/app/_services/points.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
})
export class PayPage implements OnInit {

  punto: PointService;
  dataSource: any[];

  constructor(private puntoService: PointService) { }

  ngOnInit() {
    this.puntoService.listar().subscribe(res => {
      console.log(res);
      this.dataSource = res.data;
    })
  }

}
