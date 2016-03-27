var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStores');
var AddForm = require('./AddForm');

//
function getAppState(){
  return {
    contacts: AppStore.getContacts()
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
    console.log(this.state.contacts);
      return (
        <div>
          <AddForm />
        </div>
      );
  },

  // update view state when change is received
  _onChange: function(){
    this.setState(getAppState());
  }
});

module.exports = App;
