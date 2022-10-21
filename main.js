let str = 'ПРИВЕТ';
let arr1 = str.split('');
let arr2 = arr1.reverse();
let result = arr2.join('');
console.log (result);

function aaa(str) {
    let arr1 = str.split('-');
    let arr2 = arr1.reverse();
    let result = arr2.join('');
    console.log (result);
}
aaa('Добро-пожаловать ' );

function aaa(str) {
        let x = str; 
        let arr1 = str.split('');
        let arr2 = arr1.reverse();
        let result = arr2.join('');
    if (x == result) {
        console.log (true) ;
    }
    else console.log (false);
}
aaa('')
function check(num) {
   let numm =  +prompt('введите число:', '0' ); 
   

}
check('')
function chet(asd) {
    let a = true
    let y = +prompt ('Введите число', '1');
    console.log(y)
    console.log(typeof(y));
    
      if (typeof(y) == typeof(1)) {
            a%2 == 0 
            console.log (true);
        } else {
         
            alert ('Вы ввели не число,повторите попытку')
            y = +prompt ('Введите число', '1');
        }

    



chet()
function factorial(abc) {
    let y = 1 ;
    let x = +prompt ("Введите число:", "1")
    for (let i = 1; i<x; i++) {
        y += y*i;
    }
    console.log(y);
}
factorial()