import React from "react";

class TodoForm extends React.PureComponent {
  state = {
    inputValue: ""
  };

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  render() {
    const { handleInputChange } = this;
    const { handleSubmit } = this.props;
    const { inputValue } = this.state;

    return (
      <form
        style={{ paddingTop: "20px", paddingBottom: "10px" }}
        onSubmit={handleSubmit}
      >
        <h3>New task</h3>
        <input
          value={inputValue}
          onChange={handleInputChange}
          className="form-control"
        />
      </form>
    );
  }
}

export default TodoForm;
