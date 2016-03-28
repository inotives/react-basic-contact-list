var AppDispatcher = require('../dispatchers/AppDispatchers');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  saveContact: function(contact){
    // call app dispatchers
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SAVE_CONTACT,
      contact: contact
    })
  },
  receiveContacts: function(contacts){
    // call app dispatchers
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_CONTACT,
      contacts: contacts
    })
  },
  removeContact: function(contactId){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_CONTACT,
      contactId: contactId
    })
  },
  editContact: function(contact){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.EDIT_CONTACT,
      contact: contact
    })
  },
  updateContact: function(contact){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.UPDATE_CONTACT,
      contact: contact
    })
  }
};

module.exports = AppActions;
