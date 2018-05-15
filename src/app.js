import React from "react";
import ReactDOM from "react-dom";

import Sidepanel from "./layout/Sidepanel";
import GroceryItems from "./layout/GroceryItems";
import Login from "./layout/Login";

/**
 * @class GroceryWeb
 */
export default class GroceryWeb extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      loggedIn: true
    };
  }

  render() {
    return (
      <div className="l-app">
        <Sidepanel title="My Lists" />
        <GroceryItems />
        {!this.state.loggedIn && <Login title="Login to your Dropbox Account" />}
      </div>
    )
  }
}

ReactDOM.render(
  <GroceryWeb />,
  document.getElementById('root')
);