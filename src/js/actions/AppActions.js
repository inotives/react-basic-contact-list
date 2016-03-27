var AppDispatcher = require('../dispatchers/AppDispatchers');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  saveContact: function(contact){
    // call app dispatchers
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SAVE_CONTACT,
      contact: contact
    })
  }
};

module.exports = AppActions;
