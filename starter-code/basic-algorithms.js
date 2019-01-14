// Names and Input

let hacker1, hacker2;
let arr, arr2, arr3;

hacker1 = prompt ("digite o nome do driver:");
hacker2 = prompt ("digite o nome do navigator:");

alert("The driver's name is:  "+hacker1);
alert("The navigator's name is: "+hacker2);

// //Conditionals

if(hacker1.length > hacker2.length){
    alert("The Driver has the longest name, it has: "+hacker1.length," characters");
}else if(hacker1.length === hacker2.length){
    alert("wow, you both got equally long names: "+hacker1.length," characters!!");
}else {
    alert("Yo, navigator got the longest name, it has: "+hacker2.length," characters");    
}

arr = hacker1.split("").join(" ");

alert("driver's name, separated by a space and in capitals: "+arr);

arr2 = hacker2.split("").reverse().join("");

alert("characters of the navigator's name, in reverse order: "+arr2);

if(hacker1 < hacker2){
    alert("driver's name goes first");
}else if (hacker1 === hacker2){
    alert("What?! You both got the same name?");    
} else{
    alert("Yo, the navigator goes first definitely");    
}


//o código abaixo verifica se a frase ou palavra é um palindromo !

alert('BONUS TIME!!!!');

str = prompt("put a new string and check if it's a Palindrome:");

str = str.split(""); //transforma em array


 arr3 = str.filter( function(char){
    return (char === "," || char === ' ' || char === '!' || char === "'" || char === '"' || char === '?') ? false : true; 
});


arr3 = arr3.join("");

let arrReverse = arr3.split("").reverse().join("");

 if(arr3.toLowerCase() === arrReverse.toLowerCase()){
    alert("yes its a palindrome!");
} else{
    alert("it's not a palindrome");
}

alert(arr3);

alert(arrReverse);

// Lorem ipsum generator
