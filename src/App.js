import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./css/Main.css";
import "./css/Carousel.scss";
import Main from "./pages";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

Amplify.configure(awsconfig);
function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />

        {/* <Route path="/planform" component={Planform} />
        <Route path="/choose-plan" component={ChoosePlan} />
        <Route path="/choose-plan-steps" component={ChoosePlanSteps} />
        <Route path="/choose-plan-tabs" component={ChoosePlanTabs} /> */}
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

// ,withAuthenticator/export default withAuthenticator(App);
