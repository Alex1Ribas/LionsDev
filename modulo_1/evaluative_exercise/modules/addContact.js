const prompt = require("./prompt");
const contacts = require("./contacts");

function addContact() {
    const name = prompt("Enter contact name: ");
    const phone = prompt("Enter phone number: ");
    const email = prompt("Enter e-mail: ");

    const contact = {
        name,
        phone,
        email
    };

    contacts.push(contact);
    console.log("Contact added successfully!");
}

module.exports = addContact;
