function AdressBook() {
    this.contacts = [];
    this.initialComplete = false;

};

AdressBook.prototype.getInitialContacts = function(cb) {
    var self = this;

    setTimeout(function() {
        self.initialComplete = true;
        if (cb) {
            return cb();
        }
    }, 3);
}

AdressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);
};

AdressBook.prototype.getContact = function(index) {
    return this.contacts[index];
};

AdressBook.prototype.deleteContact = function(index) {
    this.contacts.splice(index, 1);
}