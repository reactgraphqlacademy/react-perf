import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import {
  convertNumberToEnglish,
  createRange,
  createRandomUsers
} from "../utils";

const NUM_ITEMS = 1000;
let guid = 0;

class TodoList extends React.Component {
  state = {
    items: createRange(NUM_ITEMS).map(n => ({
      id: ++guid,
      text: `Task ${convertNumberToEnglish(n + 1)}`,
      users: createRandomUsers()
    })),
    inputValue: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    const item = {
      id: ++guid,
      text: e.target.elements[0].value,
      users: createRandomUsers()
    };

    this.setState(state => ({
      items: [item, ...state.items],
      inputValue: ""
    }));
  };

  removeUserFromTodo = ({ userId, todoId }) => {
    this.setState(state => {
      return {
        ...state
      };
    });
  };

  render() {
    const { handleSubmit, removeUserFromTodo } = this;
    const { items } = this.state;

    return (
      <div style={{ width: "600px", margin: "0 auto" }}>
        <h2>Todo 1 ({NUM_ITEMS} items)</h2>
        <TodoForm handleSubmit={handleSubmit} />
        <ul className="list-unstyled">
          {items.map(item => (
            <Todo
              removeUserFromTodo={removeUserFromTodo}
              key={item.id}
              data={item}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
