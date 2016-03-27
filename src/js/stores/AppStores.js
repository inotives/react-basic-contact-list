var AppDispatcher = require('../dispatchers/AppDispatchers'),
    AppConstants = require('../constants/AppConstants'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    AppAPI = require('../utils/AppAPI');

var CHANGE_EVENT = 'change';

// standard storage array
var _contacts  = [];

var AppStore = assign({}, EventEmitter.prototype, {
    saveContact: function(contact){
        _contacts.push(contact);
    },
    getContacts: function(){
        return _contacts;
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

            //emit change
            AppStore.emit(CHANGE_EVENT);
            break;
    }
    return true;
});

module.exports = AppStore;
