import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { convertNumberToEnglish, createRange } from "../utils";

const NUM_ITEMS = 1000;
let guid = 0;

class TodoList extends React.Component {
  state = {
    items: createRange(NUM_ITEMS).map(n => ({
      id: ++guid,
      text: `Task ${convertNumberToEnglish(n + 1)}`
    })),
    inputValue: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    const item = {
      id: ++guid,
      text: e.target.elements[0].value
    };

    this.setState(state => ({
      items: [item, ...state.items],
      inputValue: ""
    }));
  };

  render() {
    const { handleSubmit } = this;
    const { items } = this.state;

    return (
      <div style={{ width: "600px", margin: "0 auto" }}>
        <h2>Todo 1 ({NUM_ITEMS} items)</h2>
        <TodoForm handleSubmit={handleSubmit} />
        <ul className="list-unstyled">
          {items.map(item => (
            <Todo key={item.id} data={item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
