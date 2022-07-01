import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalState from "./Components/Context/GlobalState";
import Main from "./Main";

function App() {
  return (
    <div>
      <GlobalState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
