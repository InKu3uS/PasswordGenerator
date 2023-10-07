window.addEventListener('DOMContentLoaded', () => {
    btnGenerate.addEventListener("click", () => {
        generateBase();
    });
});

function generateBase() {

    let exclude = excludeLetter.value;
    exclude += excludeNumber.value;
    exclude += excludeSymbol.value;

    let length = parseInt(passwordLength.value);
    let base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = ".?,;-_!¡¿*%&$/()[]{}|@<>#=";

    if (numbersCheck.checked) base += numbers;
    if (simbolsCheck.checked) base += symbols;

    if(exclude.length > 0){
        generatedPassword.textContent = generatePassword(excludeChars(base, exclude),length);
    } else {
        generatedPassword.textContent = generatePassword(base, length);
    }
}



/**
 * La función `excludeChars` toma una cadena base y una cadena de exclusión como entrada, y devuelve la
 * cadena base con todos los caracteres de la cadena de exclusión eliminados.
 * @param base - El parámetro "base" es una cadena que representa la cadena base de la cual se
 * excluirán los caracteres.
 * @param exclude - El parámetro "exclude" es una cadena que contiene los caracteres que desea excluir
 * de la cadena "base".
 * @returns La función "excludeChars" devuelve la cadena "base" modificada después de eliminar todos
 * los caracteres especificados en la cadena "exclude".
 */
function excludeChars(base, exclude){
    for (let i = 0; i < exclude.length; i++) {
        base = base.replace(exclude.charAt(i),"");
    }
    return base;
}


/**
 * La función genera una contraseña aleatoria de una longitud especificada utilizando caracteres de una
 * cadena base determinada.
 * @param base - El parámetro "base" es una cadena que representa los caracteres que se pueden utilizar
 * para generar la contraseña.
 * @param length - El parámetro de longitud especifica la longitud deseada de la contraseña generada.
 * @returns una contraseña generada aleatoriamente de la longitud especificada, utilizando caracteres
 * de la cadena base proporcionada.
 */
function generatePassword(base, length) {
    let password = "";

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * base.length);
        password += base.charAt(random);
    }
    return password;
}

