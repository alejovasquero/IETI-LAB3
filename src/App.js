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
    this.state = { iisLoggedIn: false };
    this.saveCredentials = this.saveCredentials.bind(this);
    this.checkAuthentication = this.checkAuthentication.bind(this);
  }

  componentDidMount() {
    this.saveCredentials();
    this.checkAuthentication();
  }

  saveCredentials() {
    localStorage.setItem('username', 'david');
    localStorage.setItem('password', 'vasquez');
  }

  checkAuthentication() {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn) {
      this.setState({
        isLoggedIn:
          JSON.parse(loggedIn) === true ? true : false
      }, () => { console.log(this.state.isLoggedIn) });
    } else {
      this.setState({ isLoggedIn: false });
    }
  }

  render() {
    return (
      <div className="App">
        <Router>

          <Switch>
            <Route exact path="/" component={LoginView} />
            {

              this.state.isLoggedIn &&
              <Route exact path="/tasks" component={TasksView} />
            }

          </Switch>

        </Router>

      </div>
    );
  }
}

export default App;
