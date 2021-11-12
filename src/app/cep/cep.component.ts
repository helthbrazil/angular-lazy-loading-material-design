import { Component, OnInit } from '@angular/core';
import { BarraProgressoService } from '../services/barra-progresso.service';
import { CepServiceService } from '../services/cep-service.service';
import { ToastService } from '../services/toast.service';

export interface Logradouro {
  bairro: string,
  localidade: string,
  logradouro: string,
  uf: string
};

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {
  cep = '';
  dados: Logradouro | undefined;

  constructor(private cepService: CepServiceService,
    private barraProgressoService: BarraProgressoService,
    private toastService: ToastService) { }

  ngOnInit(): void {
  }

  buscarCep(event: string) {
    if (this.cep && this.cep.trim().length > 0) {
      this.barraProgressoService.mostrarBarraProgresso();
      setTimeout(() => {
        this.cepService.buscarCep(this.cep).subscribe(endereco => {
          this.barraProgressoService.ocultarBarraProgresso();
          this.dados = endereco;
        }, err => {
          this.barraProgressoService.ocultarBarraProgresso();
        });;
      }, 300);
    } else {
      this.toastService.showToast(`Cep deve ser informado`, 'Buscar CEP padrão', (event: any) => {
        this.cep = '32223080';
        setTimeout(() => {
          this.buscarCep(event);
        }, 100);
      }, 5000);
    }
  }

}
