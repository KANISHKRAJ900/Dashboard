import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Auth/Login";
import GlobalState from "./Components/Context/GlobalState";
import Social from "./Components/Pages/Social";
import Main from "./Main";
import SocialUpdate from "./Components/Update/SocialUpdate";

function App() {
  return (
    <div>
      <GlobalState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/dashboard" component={Main} />
            <Route exact path="/social" component={Social} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/social/socialupdate" component={SocialUpdate} />
            <Route path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
