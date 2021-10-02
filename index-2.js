// SERIOUS EXERCICES

// 6. Write a program
let x = prompt ('Hay nhap so tu 0-9')
if(x>4.5){
    console.log('Higherhalf')
}
else if(x<4.5){
    console.log('lowrhalf')
}

// 7. Write a program
let x = prompt('nhap x')
let n = prompt('nhap n')

if(x>n/2){
    console.log(x + 'Higherhalf' + n)
}
else if(x<n/2){
    console.log(x + 'Lowerhalf' + n)
}

// 8.Write a script
let x = Number(prompt("Hay nhap so : "));
if(x % 2 == 0){
    alert(x + "la so chan");
}
else{
    alert(x + "la so le");
}

// 9. Write a program to print out

// a.
for(x = 0 ; x <= 2;x++)
 {
    console.log("L");
}
for(x = 0 ; x <= 2;x++)
{
    console.log("H");
}

// b.
let n = Number(prompt("Enter a number n"));
j = Math.ceil(n/2)

for(i = 1 ; i <= j;i++)
{
    console.log("L");
}
for(;j < n ;j++)
{
    console.log("H");
}

// c. 
for(i = 0 ; i <=4 ;i++)
{
    console.log(0);
    console.log(1)
}

// d.
let n = Number(prompt("Enter a number n "))
for(let i = 1; i <= n ; i++)
{
    if (i % 2 == 0 )
    {
        console.log(1);
    }
    else{
        console.log(0);
    }
}


// 10.

let kg = prompt ('kg=');
let cm = prompt ('chieu cao =')
let m = cm*0.01;
let BMI = kg/(m*m);
console.log(BMI)
if (BMI <16)
{
    console.log('om tram trong');
}
else if (BMI>=16,BMI<=18.5)
{
    console.log('thieu can');
}
else if (BMI>=18.5,BMI<=25)
{
    console.log('binh thuong');
}
else if (BMI>=25,BMI<=30)
{
    console.log('du can');
}
else if (BMI>30)
{
    console.log('qua beo');
}