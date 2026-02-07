// Module imports
const prompt = require("./modules/prompt");
const addContact = require("./modules/addContact");
const updateContact = require("./modules/updateContacts");
const listContacts = require("./modules/listContacts");
const removeContacts = require("./modules/removeContacts");

function mainMenu() {
    console.log(`
 -=-=-=-=-=-=-=-=-=-=-=-
|          Menu         |
|                       |
| 1- Add Contacts       |
|                       |
| 2- Contact List       |
|                       |
| 3- Update Contact     |
|                       |
| 4- Delete Contact     |
|                       |
| 5- Exit               |
 -=-=-=-=-=-=-=-=-=-=-=-
`);

    const option = prompt("What would you like to do: ");

    switch (option) {
        case '1':
            addContact();
            mainMenu();
            break;
        case '2':
            listContacts();
            mainMenu();
            break;
        case '3':
            updateContact();
            mainMenu();
            break;
        case '4':
            removeContacts();
            mainMenu();
            break;
        case '5':
            process.exit();
            break;
        default:
            console.log('Invalid option!');
            mainMenu();
    }
}

mainMenu();
