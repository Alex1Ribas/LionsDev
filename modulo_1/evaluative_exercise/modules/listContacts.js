const contacts = require("./contacts");

function listContacts() {
    if (contacts.length === 0) {
        console.log("No contacts registered.");
        return;
    }

    contacts.forEach((contact, index) => {
        console.log(`\nID: ${index + 1}\nName: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}`);
    });
}

module.exports = listContacts;
