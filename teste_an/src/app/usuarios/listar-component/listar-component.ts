import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-component',
  standalone: false,
  templateUrl: './listar-component.html',
  styleUrl: './listar-component.css'
})
export class ListarComponent {

  usuarios = [
    {nome: 'Ana Silva', cargo: 'Desenvolvedora Frontend'},
    {nome: 'Carlos Souza', cargo: 'Analista de Sistemas'},
    {nome: 'Maria Oliveira', cargo: 'Gerente de Projetos'},
    {nome: 'Joao Santos', cargo: 'Developers Engineer'}
  ]

}
