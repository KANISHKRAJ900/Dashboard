import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Auth/Login";
import GlobalState from "./Components/Context/GlobalState";
import Main from "./Main";

function App() {
  return (
    <div>
      <GlobalState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/dashboard" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
