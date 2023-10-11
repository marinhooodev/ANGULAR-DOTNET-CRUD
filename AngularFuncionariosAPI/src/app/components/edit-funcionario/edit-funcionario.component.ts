import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Funcionarios } from 'src/app/models/funcionarios';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-edit-funcionario',
  templateUrl: './edit-funcionario.component.html',
  styleUrls: ['./edit-funcionario.component.scss'],
})
export class EditFuncionarioComponent implements OnInit {
  @Input() funcionario?: Funcionarios;
  @Output() funcionariosUpdated = new EventEmitter<Funcionarios[]>();

  @ViewChild("asdfasdf") nome: ElementRef | undefined;

  

  constructor(private funcionarioService: FuncionariosService) {}

  ngOnInit(): void {}

  updateFuncionario(funcionario: Funcionarios) {
    this.funcionarioService
      .updateFuncionario(funcionario)
      .subscribe((funcionario: Funcionarios[]) =>
        this.funcionariosUpdated.emit(funcionario)
      );
  }
  deleteFuncionario(funcionario: Funcionarios) {
    this.funcionarioService
      .deleteFuncionario(funcionario)
      .subscribe((funcionario: Funcionarios[]) =>
        this.funcionariosUpdated.emit(funcionario)
      );
  }
  createFuncionario(funcionario: Funcionarios) {
    this.funcionarioService
      .createFuncionario(funcionario)
      .subscribe((funcionario: Funcionarios[]) =>
        this.funcionariosUpdated.emit(funcionario)
      );
  }
}
