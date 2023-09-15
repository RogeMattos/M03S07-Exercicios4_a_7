import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit  {

  

  nomeCompleto: string | undefined;
  emailInformado: string | undefined;
  dataDeNascimento: string | undefined;
  usuarios: [any] | undefined
  isModalOpen = false; // Variável para controlar a exibição do modal

  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDadosFicha();
  }

  getDadosFicha() {
    this.http.get<any>('https://localhost:7267/api/Ficha').subscribe(data => {
      this.usuarios = data;
    });
  }
  openModal(){
    this.isModalOpen = true; // Abrir o modal quando o botão é clicado
  }
  
}







