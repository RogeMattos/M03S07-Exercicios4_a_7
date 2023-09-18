import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../shared/components/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit  {

  @ViewChild('modalFormulario', {static: true}) modalFormulario: TemplateRef<any> | undefined;

  modalUploadRef: NgbModalRef | undefined;
  nomeCompleto: string | undefined;
  emailInformado: string | undefined;
  dataDeNascimento: string | undefined;
  usuarios: [any] | undefined
  

  
  constructor(private http: HttpClient, private modalService: NgbModal) {}

  ngOnInit() {
    this.getDadosFicha();
  }

  getDadosFicha() {
    this.http.get<any>('https://localhost:7267/api/Ficha').subscribe(data => {
      this.usuarios = data;
      console.log(data)
    });
  }
  openModalFormularioHome() {
   
    //abertura de modal passando a referencia do Componente
    this.modalUploadRef = this.modalService.open(ModalComponent);
  }

  closeModalHome() {
    this.modalUploadRef?.close();
  }
  
  
}







