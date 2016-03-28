var AppAction = require('../actions/AppActions')
var Firebase = require('firebase');

module.exports = {
  saveContact: function(contact){
    this.firebaseRef = new Firebase('https://contactlist-dev.firebaseio.com/contacts');
    this.firebaseRef.push({
      contact: contact
    });
  },
  getContacts: function(){
    this.firebaseRef = new Firebase('https://contactlist-dev.firebaseio.com/contacts');
    this.firebaseRef.once("value", function(snapshot){
      var contacts = [];
      snapshot.forEach(function(childsnap){
        var contact = {
          id: childsnap.key(),
          name: childsnap.val().contact.name,
          phone: childsnap.val().contact.phone,
          email: childsnap.val().contact.email,
        };
        contacts.push(contact);
        // action that receive all the contacts retrieved
        AppAction.receiveContacts(contacts);
      })
    });
  },
  removeContact: function(contactId){
    this.firebaseRef = new Firebase('https://contactlist-dev.firebaseio.com/contacts/'+contactId);
    this.firebaseRef.remove();
  }
}
