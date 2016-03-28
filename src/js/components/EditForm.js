var React = require('react');
var AppActions = require('../actions/AppActions');

var EditForm = React.createClass({
  render: function(){
    return (
      <div className="well contact-form-div form-edit">
        <h3>Edit Contact</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" ref="name" onChange={this.handleChange.bind(this, 'name')} value={this.props.contactToEdit.name} className="form-control" placeholder="add name" />
          </div>

          <div className="form-group">
            <input type="text" ref="phone" onChange={this.handleChange.bind(this, 'phone')} value={this.props.contactToEdit.phone} className="form-control" placeholder="add phone no ..." />
          </div>

          <div className="form-group">
            <input type="text" ref="email" onChange={this.handleChange.bind(this, 'email')} value={this.props.contactToEdit.email} className="form-control" placeholder="add email" />
          </div>
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
                <button type="submit" className="btn btn-info btn-block btn-lg" >Update Contact</button>
            </div>
          </div>

        </form>
      </div>
    );
  },
  handleSubmit: function(e){
    e.preventDefault();
    var contact = {
      id: this.props.contactToEdit.id,
      name: this.refs.name.value.trim(),
      phone: this.refs.phone.value.trim(),
      email: this.refs.email.value.trim()
    }

    //call action
    AppActions.updateContact(contact);
  },
  handleChange: function(fieldName, event){
    var newState = event.target.value;
    var selected = this.state.selected;
    selected.name = newState;
    this.setState({selected: selected});
  }

});

module.exports = EditForm;
