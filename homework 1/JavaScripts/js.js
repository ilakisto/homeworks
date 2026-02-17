document.addEventListener("DOMContentLoaded", function(){
// задача 1
let str="abcde"
alert(str[0])
alert(str[1])
alert(str[4])

// задача 2
let p=1 
let j=-3 
let hi= p || j > 0 ? "true" : "false"
console.log(hi)

// задача 3 
let age = parseInt(prompt("How old are you?"))
if (age>=18)
    {console.log("совершеннолетний")} else {console.log("несовершеннолетний")}
})