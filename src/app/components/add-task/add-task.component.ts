import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../../../tarefa';
import { NgIf } from '@angular/common';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, NgIf, ButtonComponent],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter<Tarefa>();

  tarefa: string = '';
  categoria: string = '';
  concluido: boolean = false;
  mostrarAddTarefa: boolean = false;

  alteraVisualizacao(valor: boolean) {
    this.mostrarAddTarefa = valor;
  }

  onSubmit() {
    if(!this.tarefa) {
      alert('Adicione uma tarefa!');
      return;
    }

    const novaTarefa = {
      tarefa: this.tarefa,
      categoria: this.categoria,
      concluido: this.concluido
    }

    this.onAddTask.emit(novaTarefa);

    this.tarefa = '';
    this.categoria = '';
    this.concluido = false;
  }

}