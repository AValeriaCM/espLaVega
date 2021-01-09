import { News } from './../../Models/News';
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/_services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  noticia: News;
  dataSource : any[];
  titulo: string;
  imagen: string;
  contenido: string;
  autor: string;

  //displayedColumns: any[] = ['titulo', 'imagen', 'contenido', 'autor'];

  constructor(private newService: NewsService) { }

  ngOnInit() {
    this.newService.listar().subscribe(res => {
      console.log(res);
      this.dataSource = res.data;
    });
    
  }

}
