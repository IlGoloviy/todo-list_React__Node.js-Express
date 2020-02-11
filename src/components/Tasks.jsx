import React from 'react';
import axios from 'axios';

export default class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.done = this.done.bind(this);
    this.delete = this.delete.bind(this);
    this.state = {tasks: []}
  }

  componentDidMount() {
    axios.get('http://localhost:8080/tasks')
      .then(res => this.setState({tasks: res.data}))
  }

  done(id) {
    axios.post('http://localhost:8080/complete', {id})
      .then(res => this.setState({tasks: res.data}))
  }

  delete(id) {
    axios.post('http://localhost:8080/delete', {id});
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return task._id !== id;
      })
    })
  }

  render() {
    if (this.state.tasks.length !== 0) {
      let tasks = this.state.tasks.map(task => {
        return <div className="task-block" key={task._id}>
          <h3 className={`complete-${task.end}`}>{task.text}</h3>
          <div>
            <button onClick={() => this.done(task._id)}>Виконано</button>
            <button onClick={() => this.delete(task._id)}>Видалити</button>
          </div>
        </div>
      });
    
      return (
        <>
        {tasks}
        </>
        );
    }
    return null;
  }
}