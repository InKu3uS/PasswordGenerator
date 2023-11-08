window.addEventListener('DOMContentLoaded', () => {
    btnGenerate.addEventListener("click", () => {
        generateBase();
    });
});

function generateBase() {

    let exclude = excludeCharacters.value;

    let length = parseInt(passwordLength.value);
    let base = "";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = ".?,;-_!¡¿*%&$/()[]{}|@<>#= ";


    if (lowerCheck.checked) base += lower;
    if(upperCheck.checked) base += upper;
    if (numbersCheck.checked) base += numbers;
    if (simbolsCheck.checked) base += symbols;

    if (exclude.length > 0) {
        generatedPassword.textContent = generatePassword(excludeChars(base, exclude), length);
    } else {
        generatedPassword.textContent = generatePassword(base, length);
    }
}

function passwordTest(password) {
    let message = "This password is secure";
    if (password.length === 0) {
        passwordResult.className = "bg-danger p-2 rounded";
        passwordResult.textContent = "Insert a length for the password and make sure any type of character is checked";
        return;
    }
    if (password.length <= 8) {
        message = "A password of 8 characters or less can be broken in 8 hours";
        passwordResult.className = "bg-warning p-2 rounded";
        passwordResult.textContent = message;
        btnSave.classList.remove("invisible");
        btnSave.classList.remove("visible");
    }
    if (password.length > 8 && password.length <= 16) {

        passwordResult.className = "bg-warning p-2 rounded";
        btnSave.classList.remove("invisible");
        btnSave.classList.remove("visible");

        if (!password.match(/[?.,;\-_!¡¿*%&$/()[\]{}|@<>#=]/g) || !password.match(/\d/g) || !password.match(/\d/g)) {
            message = "A password between 9 and 16 characters must have uppercase and lowercase letters, numbers and symbols";
        } else {
            passwordResult.className = "bg-success p-2 rounded";
        }
        passwordResult.textContent = message;
        btnSave.classList.remove("invisible");
        btnSave.classList.remove("visible");
    }
    if (password.length > 16) {
        passwordResult.className = "bg-success p-2 rounded";
        passwordResult.textContent = message;
        btnSave.classList.remove("invisible");
        btnSave.classList.remove("visible");
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
function excludeChars(base, exclude) {
    for (let i = 0; i < exclude.length; i++) {
        base = base.replaceAll(exclude.charAt(i), "");
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
    passwordTest(password);
    return password;
}

