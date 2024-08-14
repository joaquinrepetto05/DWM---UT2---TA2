function reverseString(string) {
    let array = string.split('');
    let reverseArray = array.reverse();
    let reversedString = reverseArray.join('');
    console.log(reversedString);
}

reverseString("Hola Mundo");