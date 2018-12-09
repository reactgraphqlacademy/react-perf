import React from "react";

class Todo extends React.Component {
  render() {
    const {
      removeUserFromTodo,
      data: { text, users, id }
    } = this.props;

    return (
      <li className="media" style={{ borderBottom: "1px solid #ccc" }}>
        <div className="media-left" />
        <div className="media-body">
          <h4 className="media-heading">{text}</h4>
          <ul className="list-unstyled list-inline" style={{ float: "right" }}>
            {users.map(user => (
              <li key={user.id}>
                <a
                  onClick={() =>
                    removeUserFromTodo({ userId: user.id, todoId: id })
                  }
                >
                  <img
                    className="img-circle"
                    title={`By ${user.name}`}
                    style={{
                      width: "50px",
                      height: "50px",
                      float: "right"
                    }}
                    src={user.imageUrl}
                  />
                  <br />
                  Remove
                </a>
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  }
}

export default Todo;
