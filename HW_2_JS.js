// Напишите валидационный скрипт используя функции 

//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой


let stroka = "@sdfJvsdkvf4";

function hw2(strInput){
    if (typeof strInput == "string") {
        if (strInput.length < 5) {
            console.log("В строке меньше 5 символов");
        } else {
            var minStr = true;
        }

        if (strInput.length > 64) {
            console.log("В строке больше 64 символов");
        } else {
            var maxStr = true;
        }

        if ((/[а-яa-z]/i.test(strInput)) == false) {
            console.log("В строке должны быть буквы");
        } else {
            var letters = true;
        }

        if ((/[A-ZА-Я]/.test(strInput)) == false) {
            console.log("В строке должна быть хотя бы одна буква в верхнем регистре");
        } else {
            var upperCase = true;
        }

        if ((/[0-9]/.test(strInput)) == false) {
            console.log("В строке должна быть хотя бы одна цифра");
        } else {
            var numb = true;
        }

        if ((strInput.includes("@")) == false) {
        console.log("В строке должна быть хотя бы одна @");
        } else {
            var at = true;
        }

        if (strInput.length === 0) {
            console.log("Строка не должна быть пустой");
        } else {
            var notEmpty = true;
        }
        
        if (minStr && maxStr && letters && upperCase && numb && at && notEmpty) {
            console.log("Введенная строка соответствует всем параметрам");
        }
    }
}
hw2(stroka)