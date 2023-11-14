class Validator {
    constructor(number) {
        this.number = number;
    }

    isRangedNumber(number, arr) {
        if (number >= arr[0] && number <= arr[1])
            return "true";
        else
            return "false";

    }

    isPhoneNumber(phoneNumber) {
        let regex = /^(\+7)[\s]\d{3}[\s]*\d{3}[\s]?\d{2}[\s]?\d{2}/;
        if(!regex.test(phoneNumber)) 
            return false;
        else
            return true;
        
    }
}
const validator = new Validator()

console.log(validator.isRangedNumber(5, [1, 7]))
console.log(validator.isRangedNumber(2, [4, 8]))
console.log(validator.isPhoneNumber("+7 999 999 99 99")) 
console.log(validator.isPhoneNumber("a 999 999"))
console.log(validator.isPhoneNumber("9 999 999 99 99"))