import React, { createRef } from 'react';
import axios from 'axios';

export default class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.text = createRef();
    this.createTask = this.createTask.bind(this);
  }

  createTask() {
    const task = {
      text: this.text.current.value
    }

    axios.post('http://localhost:8080/tasks', task);
    this.text.current.value = '';
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Напишіть новий таск" name="text" ref={this.text}/>
        <button onClick={this.createTask}>Створити</button>
      </div>
    );
  }
}