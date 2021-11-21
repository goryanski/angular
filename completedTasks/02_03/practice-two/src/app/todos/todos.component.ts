import {Priority, TodoItem} from "./todo/todo.component";
import {Component} from "@angular/core";

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  todos: TodoItem[] = [
    {
      id: 1,
      title: 'Title 1',
      description: 'Description 1',
      startDate: new Date(),
      endDate: this.getTaskDateEnd(),
      completed: false,
      priority: Priority.Low
    },
    {
      id: 2,
      title: 'Title 2',
      description: 'Description 2',
      startDate: new Date(),
      endDate: this.getTaskDateEnd(),
      completed: false,
      priority: Priority.Middle
    },
    {
      id: 3,
      title: 'Title 3',
      description: 'Description 3',
      startDate: new Date(),
      endDate: this.getTaskDateEnd(),
      completed: false,
      priority: Priority.Height
    },
    {
      id: 4,
      title: 'Title 4',
      description: 'Description 4',
      startDate: new Date(),
      endDate: this.getTaskDateEnd(),
      completed: false,
      priority: Priority.Low
    },
    {
      id: 5,
      title: 'Title 5',
      description: 'Description 5',
      startDate: new Date(),
      endDate: this.getTaskDateEnd(),
      completed: false,
      priority: Priority.Middle
    },
  ];

  private getTaskDateEnd(): Date {
    // current date + 1 month
    let endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1);
    return endDate;
  }
  private getIdxById(id: number) {
    return this.todos.findIndex((prod) => prod.id === id);
  }

  onCompleteTaskClick(id: number) {
    const idx = this.getIdxById(id);
    this.todos[idx].completed = true;
  }
  onTaskDelete(id: number) {
    const idx = this.getIdxById(id);
    this.todos.splice(idx, 1);
  }
}
