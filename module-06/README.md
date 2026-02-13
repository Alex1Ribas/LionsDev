# Evaluative exercise – Contact manager

This project is a **contact manager** built with a main file `index.js` and modular functions: **Add contacts**, **List contacts**, **Update** and **Remove contacts**. Besides the main modules, there are dedicated modules for **prompt** (user input) and **contacts** (data array).

## Module roles

- **index.js** – Main entry point. Ties everything together and runs the flow from a `switch`/menu based on the user’s choice.

- **addContact.js** – Reads user input with `prompt-sync` and pushes a new contact into the `contacts` array as an object with `name`, `phone`, and `email` (ID is derived from the array index).

- **listContacts.js** – Lists all contacts added so far. Uses `forEach` over the `contacts` array and shows a message when there are no contacts.

- **updateContacts.js** – Updates an existing contact. It calls **listContacts** first so the user can pick which contact to update by ID. The input is converted with `-1` so the chosen ID matches the real array index (since listing shows ID as index + 1). It checks that the input is a valid number and a valid index; otherwise it returns to the menu. Then it asks for the new name, phone and email and replaces the contact at that index.

- **removeContacts.js** – Deletes a contact. It also uses **listContacts** so the user can choose by ID. After validating the input and converting to index with `-1`, it uses `contacts.splice(index, 1)` to remove that single item.

## Variables overview

| Variable     | Where it appears     | Purpose                                      |
|-------------|----------------------|----------------------------------------------|
| `prompt`    | All files            | Reads user input from the terminal           |
| `contacts`  | contacts.js, others  | Array holding all registered contacts        |
| `option`    | index.js             | User’s choice in the main menu               |
| `name`      | addContact.js        | Name entered by the user                     |
| `phone`     | addContact.js        | Phone number entered                         |
| `email`     | addContact.js        | E-mail entered                               |
| `contact`   | addContact.js        | Object for the new contact                   |
| `updateIndex` | updateContacts.js  | Index of the contact to update               |
| `newName`   | updateContacts.js    | New name for the contact                     |
| `newPhone`  | updateContacts.js   | New phone                                    |
| `newEmail`  | updateContacts.js   | New e-mail                                   |
| `removeIndex` | removeContacts.js  | Index of the contact to remove               |
| `index`     | listContacts.js      | Loop index when listing contacts             |
| `contact`   | listContacts.js      | Each contact object in the list               |
