import React, { Component } from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';

const todos = [
  {
    task: 'hello world',
    isCompleted: true
  },
  {
    task: 'hello react',
    isCompleted: false
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
  }

  render() {
    return (
      <div>
        <h1>React TodDos App</h1>
        <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
        <TodosList
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.delete.bind(this)}
        />
      </div>
    );
  }

  toggleTask(task) {
    const foundTodo = this.state.todos.find( todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos });
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos });
  }

  saveTask(oldTask, newTask) {
    const foundTodo = this.state.todos.find( todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(taskToDelete) {
    this.state.todos.remove( todo => todo.task === taskToDelete );
    this.setState({ todos: this.state.todos });
  }


}




