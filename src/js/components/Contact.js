var React = require('react');
var AppActions = require('../actions/AppActions');

var Contact = React.createClass({
  render: function(){
    return (
      <tr>
        <th>{this.props.contact.name}</th>
        <th>{this.props.contact.phone}</th>
        <th>{this.props.contact.email}</th>
        <th>
          <a href="#" className="btn btn-primary" onClick={this.handleEdit.bind(this, this.props.contact)}><i className="fa fa-pencil"></i></a>
          <a href="#" className="btn btn-danger" onClick={this.handleDelete.bind(this, this.props.contact.id)}><i className="fa fa-times"></i></a>
        </th>
      </tr>
    );
  },
  handleDelete: function(i, j){
    AppActions.removeContact(i);
  },
  handleEdit: function(i, contact){
    AppActions.editContact(i);
  }


})

module.exports = Contact;
