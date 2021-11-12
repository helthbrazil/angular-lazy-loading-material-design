import { Component, Input, OnInit } from '@angular/core';
import { BarraProgressoService } from 'src/app/services/barra-progresso.service';

export interface IMostrar {
  mostrar: boolean
}

@Component({
  selector: 'app-barra-progresso',
  templateUrl: './barra-progresso.component.html',
  styleUrls: ['./barra-progresso.component.css']
})
export class BarraProgressoComponent implements OnInit {
  constructor(private barraProgressoService: BarraProgressoService) { }

  ngOnInit(): void {
    this.barraProgressoService.ocultarBarraProgresso();
  }

}
