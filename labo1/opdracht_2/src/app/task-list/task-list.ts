import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  titel: string;
}

@Component({
  selector: 'app-task-list',
  imports: [FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  nieuw: string = "";
  tasks: Task[] = [];

  idNumb: number = 0;

  Add() {
    let newT: Task = {
      id: this.idNumb,
      titel: this.nieuw
    };

    // toevoegen mbh spread
    this.tasks = [...this.tasks, newT];
    this.nieuw = "";
    this.idNumb++;
  }

  removeTask(TaskID: number) {
    this.tasks = this.tasks.filter((t) => t.id !== TaskID);
  }
}
