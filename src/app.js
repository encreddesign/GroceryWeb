import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Reducers from "./reducers";

import Site from "./routes/Site";

const store = createStore(Reducers);

/**
 * @class GroceryWeb
 */
export default class GroceryWeb extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Site} />
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <GroceryWeb />
  </Provider>,
  document.getElementById('root')
);