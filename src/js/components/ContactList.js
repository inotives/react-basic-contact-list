var React = require('react');
var Contact = require('./Contact');

var ContactList = React.createClass({
  render: function(){
    return (
      <div>
        <h3>Contacts</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.contacts.map(function(contact, i){
                return <Contact contact={contact} key={i} />
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
})

module.exports = ContactList;
