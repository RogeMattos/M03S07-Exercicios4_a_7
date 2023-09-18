import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{

  @ViewChild('modalFormulario', {static: true}) modalFormulario: TemplateRef<any> | undefined;

  @Output() closeModal: EventEmitter<any> = new EventEmitter();
 


  modalUploadRef: NgbModalRef | undefined;
  nomeCompleto: string | undefined;
  emailInformado: string | undefined;
  dataDeNascimento: string | undefined;
  id: number | undefined
  usuarios: [any] | undefined
  
  constructor(private activeModal: NgbActiveModal, private http: HttpClient, private modalService: NgbModal) {}

  ngOnInit() { 
    this.getDadosFichaPorId();
    
  }

  getDadosFichaPorId(){
    
    this.http.get<any>('https://localhost:7267/api/Ficha/{id}' + this.id).subscribe(data => {
      this.usuarios = data;
      console.log(data)

      
    });
  }

  fecharModal() {
    this.closeModal?.emit();
  }

  //somente funciona quando a modal for aberta a partir do component
  fechar() {
    this.activeModal.close();
  }


}
