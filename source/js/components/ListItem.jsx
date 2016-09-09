import React, { Component } from 'react';
import ListItemDescription from './ListItemDescription.jsx';

class ListItem extends Component {
  _handleSubmit(event) {
    event.preventDefault();

    const listItemId = this.props.item.id;

    this.props.removeListItem(listItemId);
  }

  render() {
    const { item } = this.props;

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          {`${item.quantity} x ${item.name}`}
        </div>

        {item.description.length > 0 ? <ListItemDescription description={item.description} /> : ''}

        <div className="panel-footer">
          <form className="form-inline" onSubmit={this._handleSubmit.bind(this)}>
            <button type="submit" className="btn btn-default btn-xs">Remove</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ListItem;
