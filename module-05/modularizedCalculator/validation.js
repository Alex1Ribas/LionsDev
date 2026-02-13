function validate(number) {
    const num = parseFloat(number);
    return isNaN(num);
}

module.exports = validate;
