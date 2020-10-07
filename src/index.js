module.exports = function toReadable (number) {
    let unit = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'};
    let unique = {11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'};
    let ten = {2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'};
    let tens = {10: 'ten', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'};
    let hundred = {1: 'one hundred', 2: 'two hundred', 3: 'three hundred', 4: 'four hundred', 5: 'five hundred', 6: 'six hundred', 7: 'seven hundred', 8: 'eight hundred', 9: 'nine hundred'};
    let hundreds = {100: 'one hundred', 200: 'two hundred', 300: 'three hundred', 400: 'four hundred', 500: 'five hundred', 600: 'six hundred', 700: 'seven hundred', 800: 'eight hundred', 900: 'nine hundred'};

    let numbers = number.toString().split('');
    let newNumbers = +(numbers[1] + numbers[2]);

    if (number == 0) {
        return 'zero';
    } else if (number > 0 && number < 10) {
        return `${unit[number]}`;
    } else if (number % 10 == 0 && numbers.length == 2) {
        return `${tens[number]}`;
    } else if (number > 10 && number < 20) {
        return `${unique[number]}`;
    } else if (numbers.length == 2 && number % 10 != 0) {
        return `${ten[numbers[0]]} ${unit[numbers[1]]}`;
    } else if (numbers.length == 3 && number % 100 == 0) {
        return `${hundreds[number]}`;
    } else if (numbers.length == 3 && number % 10 == 0) {
        return `${hundred[numbers[0]]} ${tens[newNumbers]}`;
    } else if (numbers.length == 3 && newNumbers > 10 && newNumbers < 20) {
        return `${hundred[numbers[0]]} ${unique[newNumbers]}`;
    } else if (numbers.length == 3 && newNumbers > 20 && newNumbers <= 99) {
        return `${hundred[numbers[0]]} ${ten[numbers[1]]} ${unit[numbers[2]]}`;
    } else if (numbers.length == 3 && newNumbers > 0 && newNumbers < 10) {
        return `${hundred[numbers[0]]} ${unit[newNumbers]}`;
    }
};