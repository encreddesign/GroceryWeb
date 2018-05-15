import React from "react";

/**
 * @class Lists
 */
export default class Lists extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      lists: null
    };

    this.placeholderArray = [1, 2, 3, 4];
  }

  /**
   * List item skeleton
   * @param {Boolean} placeholder
   * @param {Number} listId
   * @param {String} listTitle
   * @param {Number} listSize
   */
  itemSkeleton(placeholder = false, listId = 0, listTitle = 'List', listSize = 0) {
    return (
      <li key={listId} className={placeholder ? "c-lists__item  c-lists__item--placeholder" : "c-lists__item"}>
        <button data-list-id={listId}>
          {!placeholder && listTitle}
          {!placeholder && <span>{listSize}</span>}
        </button>
      </li>
    )
  }

  render() {
    let listItems = [];

    if(this.state.loading) {
      listItems = this.placeholderArray.map((value, key) =>
        this.itemSkeleton(true, key)
      );
    } else if(this.state.lists !== null) {
      listItems = this.itemSkeleton();
    }
    
    return (
      <ul className="c-lists">
        {listItems}
      </ul>
    )
  }
}