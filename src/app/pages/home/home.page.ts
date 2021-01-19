import { MatSort } from '@angular/material/sort';
import { News } from './../../Models/News';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from 'src/app/_services/news.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  noticia: News;
  dataSource : any[];


  constructor(private newService: NewsService) { }

  ngOnInit() {
    this.newService.listar().subscribe(res => {
      console.log(res);
      this.dataSource = res.data;
    });
    
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      if (this.dataSource.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
