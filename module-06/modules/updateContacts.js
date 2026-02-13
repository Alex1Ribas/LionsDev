const contacts = require("./contacts");
const prompt = require("./prompt");
const listContacts = require("./listContacts");

function updateContact() {
    listContacts();

    const updateIndex = parseInt(prompt("Select the ID of the contact you want to update: "), 10) - 1;

    if (isNaN(updateIndex) || updateIndex < 0 || updateIndex >= contacts.length) {
        console.log("Contact not found. Try again!");
        return;
    }

    const newName = prompt("Updated name: ");
    const newPhone = prompt("Updated phone: ");
    const newEmail = prompt("Updated e-mail: ");

    contacts[updateIndex] = {
        name: newName,
        phone: newPhone,
        email: newEmail
    };

    console.log("Contact updated successfully!");
}

module.exports = updateContact;
