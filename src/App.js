import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Exercise1 from "./exercise_1/TodoList";
import Exercise2 from "./exercise_2/TodoList";
import Exercise3 from "./exercise_3/TodoList";
import Exercise4 from "./exercise_4";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Helmet>
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
              integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
              crossorigin="anonymous"
            />
          </Helmet>
          <Route
            exact
            path="/"
            render={() => (
              <ul>
                <li>
                  <Link to="/exercise_1">Exercise 1</Link>
                </li>
                <li>
                  <Link to="/exercise_2">Exercise 2</Link>
                </li>
                <li>
                  <Link to="/exercise_3">Exercise 3</Link>
                </li>
                <li>
                  <Link to="/exercise_4">Exercise 4</Link>
                </li>
              </ul>
            )}
          />
          <Route path="/exercise_1" component={Exercise1} />
          <Route path="/exercise_2" component={Exercise2} />
          <Route path="/exercise_3" component={Exercise3} />
          <Route path="/exercise_4" component={Exercise4} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
