import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Exercise2 from "./exercise2";
import Example1 from "./example_1_solution/TodoList";
import Example2 from "./example_2/TodoList";
import Example3 from "./example_3/TodoList";
import Example4 from "./example_4";

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
                  <Link to="/example_1">Example 1</Link>
                </li>
                <li>
                  <Link to="/example_2">Example 2</Link>
                </li>
                <li>
                  <Link to="/example_3">Example 3</Link>
                </li>
                <li>
                  <Link to="/example_4">Example 4</Link>
                </li>
              </ul>
            )}
          />
          <Route path="/example_1" component={Example1} />
          <Route path="/example_2" component={Example2} />
          <Route path="/example_3" component={Example3} />
          <Route path="/example_4" component={Example4} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
