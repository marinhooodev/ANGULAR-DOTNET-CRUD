import { Component, ElementRef, ViewChild } from '@angular/core';
import { Funcionarios } from './models/funcionarios';
import { FuncionariosService } from './services/funcionarios.service';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Crud';
  funcionarios: Funcionarios[] = [];
  funcionarioToEdit?: Funcionarios;

  @ViewChild("toggleEditor") editorBox : any;

  activeColor() {
    this.editorBox?.classList.toggle("active")
  }

  constructor(private funcionariosService: FuncionariosService ) {}

  ngOnInit() : void {
     this.funcionariosService
     .getFuncionarios().subscribe((result: Funcionarios[]) => (this.funcionarios = result))
  }

  updateFuncionarioList(funcionario: Funcionarios[]) {
    this.funcionarios = funcionario
  }

  initNewFuncionario() {
    this.funcionarioToEdit = new Funcionarios();
  }

  editFuncionario(funcionario: Funcionarios) {
    this.funcionarioToEdit = funcionario;
  }
}

