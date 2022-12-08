//Нужно определить, является ли строка палиндромом. Функция должна возвращать true или false.

//let palindromeDefinition = prompt ('Please, type the palindrome');
let palindromeDefinition = 'axa axa';
function palindromeIdentify(palindrome) {
    let palindromeReverse = palindrome.split('').reverse().join('');
    if ( palindromeReverse == palindrome) {
        return true;
    }
    return false
}

console.log ('Is this palindrome? - ', palindromeIdentify (palindromeDefinition));