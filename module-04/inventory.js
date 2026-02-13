const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let stock = [];

showMenu();

function showMenu() {
    console.log(`
---------- Menu ---------
| 1. Register Product  |
| 2. Display stock     |
| 3. Edit product      |
| 4. Remove Product    |
| 5. Find product      |
| 6. Exit              |
-------------------------
    `);
    rl.question('Choose an option above: ', (menu) => {
        switch (menu) {
            case '1':
                registerProduct();
                break;
            case '2':
                displayStock();
                break;
            case '3':
                editProduct();
                break;
            case '4':
                removeProduct();
                break;
            case '5':
                findProduct();
                break;
            case '6':
                rl.close();
                console.log('\nSee you next time!');
                break;
            default:
                console.log('Enter a valid option');
                showMenu();
        }
    });
}

function registerProduct() {
    rl.question('Enter product name: ', (item) => {
        rl.question('Enter quantity: ', (quantity) => {
            rl.question('Is it clothing or accessory: ', (type) => {
                stock.push({
                    product: item,
                    quantity,
                    type
                });
                console.log('\nDone successfully!');
                rl.question('Register another product? (y/n): ', (input) => {
                    if (input === 'y' || input === 'Y') {
                        registerProduct();
                    } else {
                        showMenu();
                    }
                });
            });
        });
    });
}

function displayStock() {
    if (stock.length === 0) {
        console.log('No products registered. Try adding one first!\n');
        registerProduct();
    } else {
        console.log(stock);
        showMenu();
    }
}

function editProduct() {
    rl.question('Enter the name of the product you want to edit: ', (edit) => {
        let found = false;

        for (let i = 0; i < stock.length; i++) {
            if (stock[i].product === edit) {
                found = true;
                rl.question('Enter the new product name: ', (newName) => {
                    rl.question('Enter the new quantity: ', (newQuantity) => {
                        rl.question('Enter the new type: ', (newType) => {
                            stock[i] = {
                                product: newName,
                                quantity: parseFloat(newQuantity),
                                type: newType
                            };
                            console.log('Product updated successfully!');
                            showMenu();
                        });
                    });
                });
                break;
            }
        }

        if (!found) {
            console.log("Product not found. Try again!");
            showMenu();
        }
    });
}

function removeProduct() {
    rl.question('Enter the name of the product you want to remove: ', (toRemove) => {
        let found = false;
        for (let i = 0; i < stock.length; i++) {
            if (stock[i].product === toRemove) {
                stock.splice(i, 1);
                console.log('Operation completed successfully!');
                found = true;
                break;
            }
        }
        if (!found) {
            console.log("Product not found. Try again!");
        }
        showMenu();
    });
}

function findProduct() {
    rl.question('Enter the product name to search for: ', (search) => {
        const results = stock.filter(product =>
            product.product.toLowerCase().includes(search.toLowerCase())
        );
        if (results.length > 0) {
            console.log('\nProducts found:');
            results.forEach(prod => {
                console.log(`- ${prod.product} | Quantity: ${prod.quantity} | Type: ${prod.type}`);
            });
        } else {
            console.log('No products found with that name.');
        }
        showMenu();
    });
}
