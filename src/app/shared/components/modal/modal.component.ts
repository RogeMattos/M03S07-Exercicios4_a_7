import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from 'src/app/Interfaces/IUsuario';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{

  @ViewChild('modalFormulario', {static: true}) modalFormulario: TemplateRef<any> | undefined;

  @Output() closeModal: EventEmitter<any> = new EventEmitter();
 

  usuarioForm?: FormGroup; 
  modalUploadRef: NgbModalRef | undefined;
  nomeCompleto: string | undefined;
  emailInformado: string | undefined;
  dataDeNascimento: string | undefined;
  id: number | undefined
  usuarios: [any] | undefined
  usuariosDados: IUsuario | undefined
  
  constructor(private activeModal: NgbActiveModal, private http: HttpClient, private modalService: NgbModal) {

    this.usuarioForm = new FormGroup({
      nomeCompleto: new FormControl(''),
      emailInformado: new FormControl(''),
      dataDeNascimento: new FormControl(''),
    });
  }

  async ngOnInit() {
    // Certifique-se de que 'id' tenha um valor antes de chamar 'getDadosFichaPorId'
    
      this.getDadosFichaPorId();
      this._preencherUsuario();
    }
    
    
  

  getDadosFichaPorId() {
    // Use interpolação correta na URL
    this.http.get<any>('https://localhost:7267/api/Ficha/' + this.id).subscribe(data => {
      this.usuarios = data;
      console.log(data);
    });
  }

  fecharModal() {
    this.closeModal?.emit();
  }

  //somente funciona quando a modal for aberta a partir do component
  fechar() {
    this.activeModal.close();
  }


  private _preencherUsuario() {
    // Certifique-se de que 'usuariosDados' tenha dados antes de preencher o formulário
    if (this.usuariosDados) {
      this.usuarioForm?.get('nomeCompleto')?.setValue(this.usuariosDados.nomeCompleto);
      this.usuarioForm?.get('emailInformado')?.setValue(this.usuariosDados.emailInformado);
      this.usuarioForm?.get('dataDeNascimento')?.setValue(this.usuariosDados.dataDeNascimento);
    }
  }
  
    

}
