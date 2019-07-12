describe ('Adress book', function() {
var adressBook, 
    thisContact;

beforeEach(function() {
    adressBook = new AdressBook();
    thisContact = new Contact()
});

    it('should be able to add a contact', function() {
        adressBook.addContact(thisContact);
        expect(adressBook.getContact(0)).toBe(thisContact);
    });

    it('should be able to delete a contact', function() {
        adressBook.addContact(thisContact);
        adressBook.deleteContact(0);
        expect(adressBook.getContact(0)).not.toBeDefined();
    });
});


describe('Async Adress Book', function() {
    var adressBook = new AdressBook();

    beforeEach(function(done) {
        adressBook.getInitialContacts(function() {
            done();
        });
    });

    it('should grab initial contacts', function(done) {
        expect(adressBook.initialComplete).toBe(true);
        done();
    });
});