/********************************************************************************

    Curso: "FUNDAMENTOS DE PROGRAMACIÓN BACKEND"
    CENTRO DE INVESTIGACIÓN EN COMPUTACIÓN (CIC-IPN)

    ABRAHAM TERÁN SALCEDO
    https://www.linkedin.com/in/abraham-teran/

*********************************************************************************/

/*-*-*-*-*-*-*-*-*-*- TAREA UNO (1) -*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*/
console.log("-------- TAREA UNO (1) ----------------------------------------------------")

/*-----------------------------------------------------------------------------------------------------*/
// ---| Ejercicio 1.1: Dada una frase, retornar si se trata o no de un palíndromo.
console.log("\n -*- Ejercicio 1.1: Dada una frase, retornar si se trata o no de un palíndromo.")

let ReverseString = (input_string) => {
    if (typeof input_string === "string") {
        return input_string.split('').reverse().join('').toString();
    }

    return "'ReverseString'(function): input is not a string...";
}

let IsPalindrome = (input_string) => {
    if (typeof input_string === "string") {
        let clean_string = input_string.toLowerCase().replace(/[\W_]/g, '');

        let reversed_string = ReverseString(clean_string);
        return clean_string === reversed_string;
    }

    return "'IsPalindrome'(function): input is not a string...";
}

let phrase_1 = "paran gari cutiri micuaro";
let is_palindrome_1 = IsPalindrome(phrase_1); // false
console.log("Input Phrase: '%s' ..... Is Palindrome?: ", phrase_1, is_palindrome_1);

let phrase_2 = "racecar"
let is_palindrome_2 = IsPalindrome(phrase_2); // true
console.log("Input Phrase: '%s' ..... Is Palindrome?: ", phrase_2, is_palindrome_2);

let phrase_3 = "anita lava la tina"
let is_palindrome_3 = IsPalindrome(phrase_3); // true
console.log("Input Phrase: '%s' ..... Is Palindrome?: ", phrase_3, is_palindrome_3);

let phrase_4 = "Amo la Pacífica Paloma"
let is_palindrome_4 = IsPalindrome(phrase_3); // true
console.log("Input Phrase: '%s' ..... Is Palindrome?: ", phrase_4, is_palindrome_4);

let phrase_5 = 52049;
let is_palindrome_5 = IsPalindrome(phrase_5); // input value is not a string...
console.log("Input Phrase: '%s' ..... Is Palindrome?: ", phrase_5, is_palindrome_5);

/*-----------------------------------------------------------------------------------------------------*/
// ---| Ejercicio 1.2: Dado un número, retornar si se trata o no de un número primo.
console.log("\n -*- Ejercicio 1.2: Dado un número, retornar si se trata o no de un número primo.");

let IsPrime = (input_number) => {
    if (typeof input_number !== 'number' || !Number.isInteger(input_number) || input_number < 2) {
        return "'IsPrime'(function): input must be an integer greater than 1...";
    }

    for (let i = 2; i <= Math.sqrt(input_number); i++) {
        if (input_number % i === 0) {
            return false;
        }
    }

    return true;
}

for (let input_verify_isPrime = -3; input_verify_isPrime <= 100; input_verify_isPrime++) {
    let is_prime = IsPrime(input_verify_isPrime);

    if (is_prime && input_verify_isPrime > 1) {
        console.log("Input Number: ", input_verify_isPrime, " ..... Is Prime?: ", is_prime, "  <<<<------ Prime number found.");
    }

    else {
        console.log("Input Number: ", input_verify_isPrime, " ..... Is Prime?: ", is_prime);
    }
}
/*-----------------------------------------------------------------------------------------------------*/
// ---| Ejercicio 1.3: Escribir el código para ordenar de forma ascendente un arreglo de números utilizando el algoritmo Bubble Sort.
console.log("\n -*- Ejercicio 1.3: Escribir el código para ordenar de forma ascendente un arreglo de números utilizando el algoritmo Bubble Sort.");

let ArrayDataType_isNumber = (array) => {
    for (let element of array) {
        if (typeof element != "number") {
            return false;
        }
    }
    
    return true;
}

let SwapArrayElements = (array, index_1, index_2) => {
    [array[index_1], array[index_2]] = [array[index_2], array[index_1]];
    return array;
}

let BubbleSort = (array) => {
    let array_elements_areNumbers = ArrayDataType_isNumber(array);

    if (array_elements_areNumbers) {
        let array_length = array.length;

        for (let i = 0; i < array_length - 1; i++) {
            for (let j = 0; j < array_length - 1; j++) {
                    if (array[j] > array[j + 1]) {
                        array = SwapArrayElements(array, j, j + 1);
                }
            }
        }

        return array;
    }

    return "'BubbleSort'(function): array element not a number...";
}

let array_1 = [4, 2, 8, 5, 9, 3, 6, 1, 7];
console.log("Input array: ....", array_1);

let sorted_array_1 = BubbleSort(array_1);
console.log("Sorted array: ...", sorted_array_1);

let array_2 = [4, 2, 8, 5, "hello", 9, 3, 6, 1, 7];
console.log("\nInput array: ....", array_2);

let sorted_array_2 = BubbleSort(array_2);
console.log("Sorted array: ...", sorted_array_2);
