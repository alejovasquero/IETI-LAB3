import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './users/Login.js';
import Tasks from './tasks/Tasks.js'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const LoginView = () => (
  <Login />
);

const TasksView = () => (
  <Tasks />
);

class App extends React.Component {


  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <Router>

          <Switch>
            <Route exact path="/" component={LoginView} />
            <Route exact path="/tasks" component={TasksView} />
          </Switch>

        </Router>

      </div>
    );
  }
}

export default App;
