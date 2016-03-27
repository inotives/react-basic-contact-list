var React = require('react');
var AppActions = require('../actions/AppActions');

var AddForm = React.createClass({
  render: function(){
    return (
      <div className="well contact-form-div">
        <h3>Add Contact</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" ref="name" className="form-control" placeholder="add name" />
          </div>

          <div className="form-group">
            <input type="text" ref="phone" className="form-control" placeholder="add phone no ..." />
          </div>

          <div className="form-group">
            <input type="text" ref="email" className="form-control" placeholder="add email" />
          </div>
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
                <button type="submit" className="btn btn-primary btn-block btn-lg" >Save Contact</button>
            </div>
          </div>

        </form>
      </div>
    );
  },
  handleSubmit: function(e){
    e.preventDefault();
    var contact = {
      name: this.refs.name.value.trim(),
      phone: this.refs.phone.value.trim(),
      email: this.refs.email.value.trim()
    }

    //call action
    AppActions.saveContact(contact);
  }

});

module.exports = AddForm;
