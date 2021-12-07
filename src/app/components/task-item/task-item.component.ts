import { Component, OnInit , Input , Output ,EventEmitter} from '@angular/core';
import { Task } from '../../Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input()
  task!: Task;
  faTimes=faTimes;

  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder:EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  onDelete(_task: any){
    this.onDeleteTask.emit(this.task)
  }

  onToggle(_task: any){
    this.onToggleReminder.emit(this.task)
  }

}
