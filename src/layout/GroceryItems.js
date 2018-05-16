import React from "react";
import Toolbar from "../components/Toolbar";

/**
 * @class GroceryItems
 */
export default class GroceryItems extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      items: null
    };
  }

  render() {
    return (
      <div className="l-app__mainpanel  l-grocery">
        <Toolbar prefix="Hello" userName="TestUser" />
      </div>
    )
  }
}