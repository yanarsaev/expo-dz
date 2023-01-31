"use strict"

let man = {
    name: 'Максим',
    surname: 'Максимов',
    age: 25,
    height: 181,
    login: 'maximov777',
    password: 'max777',
    amount: 50000
}
man.address = {
    city: 'Moscow',
    street: 'Lenina',
    house: 45
}


let text = 'max777';
function task(task1){
    if (task1 === 'max777'){
        console.log(`Добро пожаловать, ${man.name} ${man.surname}`)
    } else{
        console.log(`Указанный пароль из переменной (${text}) не верен. Попробуйте еще раз`)
    }
}
task(text);