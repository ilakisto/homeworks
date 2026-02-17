document.addEventListener("DOMContentLoaded", function(){

let task1=document.querySelector(".task11")  
let task2=document.querySelector(".task22")  
let task3=document.querySelector(".task33")
let task4=document.querySelector(".task44")
let task5=document.querySelector(".task55")
let task6=document.querySelector(".task66")
let task7=document.querySelector(".task77")

// Задача 1
let a=prompt("Сколько вам лет?")
if (a < 65){
    task1.textContent="Вам еще рано на пенсию"
}
else{
    task1.textContent="Поздравляем с пенсионным возрастом"
}

// задача 2
let b=prompt("Введите первое число")
let d=prompt("Введите второе число")
if (b > d){
    task2.textContent="Первое число больше"
}
if (b < d){
    task2.textContent= "Второе число больше"
}
if ( b === d){
   task2.textContent="Числа равны"
}

// задача 3
let e=prompt("Введите число")
if (e % 2 === 0){
    task3.textContent="Это четное число"
}
else{
    task3.textContent="Это нечетное число"
}

// задача 4
const userGuess = prompt("Угадайте число от 1 до 10:")
const secretNumber = 3
if (userGuess == secretNumber){
    task4.textContent="Вы угадали!"
}
else{
    task4.textContent="Попробуйте еще раз"
}

// задача 5
let g=prompt("Введите логин")
let h=prompt("Введите пароль")
if(g === "admin" && h === "12345"){
    alert("Добро пожаловать!")
}
else{
    alert("Неверный логин или пароль")
}

// задача 6
let i=prompt("Введите год")
if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0){
    task6.textContent="Это високосный год"
}
else{
    task6.textContent="Это не високосный год"
}

// задача 7
let j=prompt("Введите число")
if(j>100){
    task7.textContent="Большое число"
}
if(j<100){
    task7.textContent="Маленькое число"
}
else{
    task7.textContent="Точно 100!"
}

})