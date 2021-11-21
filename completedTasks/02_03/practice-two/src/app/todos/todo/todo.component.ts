import {Component, EventEmitter, Input, Output} from "@angular/core";

export enum Priority {
  Low,
  Middle,
  Height
}

export interface TodoItem {
  id?: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  completed: boolean;
  priority: Priority;
}


@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todoItem: TodoItem = {
    title: 'default title',
    description: 'default description',
    startDate: new Date(),
    endDate: new Date(),
    completed: false,
    priority: Priority.Low
  };

  get todoPriority(): string {
    return String(Object.values(Priority)[this.todoItem.priority]);
  }

  @Output() completeEvent = new EventEmitter<number>()
  @Output() deleteEvent = new EventEmitter<number>()

  onCompleteClick() {
    // send task id to add class '.completed' to this todoItem (in todos.component)
    this.completeEvent.emit(this.todoItem.id);
  }
  onDeleteClick() {
    this.deleteEvent.emit(this.todoItem.id);
  }
}
