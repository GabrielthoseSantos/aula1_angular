import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  standalone: false,
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css'
})
export class Cadastrar {

    listaItens = ['Maçã', 'Banana', 'Laranja'];


    mostrarMensagem = false;

    isDestaque = true;
    hasError = false;

    corFundo = 'yellow';
    tamanhoFonte = ''


    toggleMensagem(){
      this.mostrarMensagem = !this.mostrarMensagem;
      this.isDestaque = !this.isDestaque;
      this.hasError = !this.hasError;
      this.tamanhoFonte = '40px';
    }

}
