import React, { Component } from 'react';
import styled from 'styled-components';

const TaskWrapper = styled.div`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #c0392b;
  }
`;

const Input = styled.input`
  padding: 8px;
  margin-right: 10px;
  border-radius: 6px;
  border: 1px solid #aaa;
`;

class TaskList extends Component {
  tasks = [
    { id: 1, text: 'Купити хліб' },
    { id: 2, text: 'Вивчити React' },
  ];

  nextId = 3;

  handleDelete = (id) => {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.forceUpdate(); 
  };

  handleAdd = () => {
    const text = this.input.value.trim();
    if (text) {
      this.tasks.push({ id: this.nextId++, text });
      this.input.value = '';
      this.forceUpdate();
    }
  };

  render() {
    return (
      <div>
        <div style={{ marginBottom: '15px' }}>
          <Input
            type="text"
            placeholder="Нове завдання"
            ref={el => (this.input = el)}
          />
          <Button onClick={this.handleAdd}>Додати</Button>
        </div>
        {this.tasks.map(task => (
          <TaskWrapper key={task.id}>
            <span>{task.text}</span>
            <Button onClick={() => this.handleDelete(task.id)}>Видалити</Button>
          </TaskWrapper>
        ))}
      </div>
    );
  }
}

export default TaskList;
