import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarraProgressoService {

  constructor() { }

  mostrarBarraProgresso() {
    const barraProgresso = document.getElementById('barra-progresso');
    if (barraProgresso) {
      barraProgresso.style.display = 'block';
    }
  }

  ocultarBarraProgresso(){
    const barraProgresso = document.getElementById('barra-progresso');
    if (barraProgresso) {
      barraProgresso.style.display = 'none';
    }
  }
}
