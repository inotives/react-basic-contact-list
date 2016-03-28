var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStores');

// Components 
var AddForm = require('./AddForm'),
    EditForm = require('./EditForm'),
    ContactList = require('./ContactList');

//
function getAppState(){
  return {
    contacts: AppStore.getContacts(),
    contactToEdit: AppStore.getContactToEdit()
  }
}

var App = React.createClass({
  getInitialState: function(){
    return getAppState();
  },
  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange);
  },
  componetUnmount: function(){
    AppStore.removeChangeListener(this._onChange);
  },
  render: function(){
      if(this.state.contactToEdit == ''){
        var form = <AddForm />;
      }
      else{
        var form = <EditForm contactToEdit={this.state.contactToEdit}/>
      }
      return (
        <div>
          {form}
          <ContactList contacts={this.state.contacts}/>
        </div>
      );
  },

  // update view state when change is received
  _onChange: function(){
    this.setState(getAppState());
  }
});

module.exports = App;
