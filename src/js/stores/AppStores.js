var AppDispatcher = require('../dispatchers/AppDispatchers'),
    AppConstants = require('../constants/AppConstants'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    AppAPI = require('../utils/AppAPI');

var CHANGE_EVENT = 'change';

// standard storage array
var _contacts  = [];
var _contact_to_edit = '';

var AppStore = assign({}, EventEmitter.prototype, {
    saveContact: function(contact){
        _contacts.push(contact);
    },
    getContacts: function(){
        return _contacts;
    },
    getContactToEdit: function(){
        return _contact_to_edit;
    },
    setContacts: function(contacts){
      _contacts = contacts;
    },
    setContactToEdit: function(contact){
      _contact_to_edit = contact;
    },
    removeContact: function(contactId){
      var index = _contacts.findIndex(x => x.id === contactId);
      _contacts.splice(index, 1);
    },
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback){
        this.on('change', callback);
    },
    removeChangeListener: function(callback){
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType){
        case AppConstants.SAVE_CONTACT:
            console.log('Saving Contact');
            // store save (app store)
            AppStore.saveContact(action.contact);

            // API:: Save
            AppAPI.saveContact(action.contact);

            //emit change
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.RECEIVE_CONTACT:
            console.log('Set Receive Contact');

            // get from app store
            AppStore.setContacts(action.contacts);

            //emit change
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.REMOVE_CONTACT:
            console.log('Remove Contact');

            // save to AppAPI
            AppStore.removeContact(action.contactId);

            // API:: Remove
            AppAPI.removeContact(action.contactId);

            //emit change
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.EDIT_CONTACT:

            // save to AppAPI
            AppStore.setContactToEdit(action.contact);

            //emit change
            AppStore.emit(CHANGE_EVENT);
            break;
    }
    return true;
});

module.exports = AppStore;
