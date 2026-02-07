const prompt = require("./prompt");
const contacts = require("./contacts");
const listContacts = require("./listContacts");

function removeContacts() {
    listContacts();

    const removeIndex = parseInt(prompt("Choose which contact to delete: "), 10) - 1;

    if (isNaN(removeIndex) || removeIndex < 0 || removeIndex >= contacts.length) {
        console.log("Please choose a valid option!");
        return;
    }

    contacts.splice(removeIndex, 1);
    console.log("Contact deleted successfully!");
}

module.exports = removeContacts;
