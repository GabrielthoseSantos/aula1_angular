import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing-module';
import { Cadastrar } from './cadastrar/cadastrar';
import { UsuariosModule } from '../usuarios/usuarios-module';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    Cadastrar
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    UsuariosModule,
    MatToolbarModule
  ]
})
export class LivrosModule { }
